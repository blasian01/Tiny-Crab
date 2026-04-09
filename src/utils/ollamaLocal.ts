import { isLocalModelMode, isLoopbackHttpUrl } from './envUtils.js'
import { errorMessage } from './errors.js'

type OllamaUnloadResult =
  | { ok: true; doneReason?: string }
  | { ok: false; error: string }

function normalizeBaseUrl(raw: string | undefined): string | undefined {
  const value = raw?.trim()
  if (!value) return undefined
  if (value.startsWith('http://') || value.startsWith('https://')) {
    return value
  }
  return `http://${value}`
}

export async function unloadOllamaModelFromMemory(
  model: string,
): Promise<OllamaUnloadResult> {
  const trimmedModel = model.trim()
  if (!trimmedModel) {
    return { ok: false, error: 'No model name provided.' }
  }

  if (!isLocalModelMode()) {
    return {
      ok: false,
      error: 'The /unload command is only available in local model mode.',
    }
  }

  const baseUrl = normalizeBaseUrl(process.env.ANTHROPIC_BASE_URL)
  if (!baseUrl || !isLoopbackHttpUrl(baseUrl)) {
    return {
      ok: false,
      error:
        'ANTHROPIC_BASE_URL must point to local Ollama (localhost or 127.0.0.1).',
    }
  }

  let endpoint: string
  try {
    endpoint = new URL('/api/generate', baseUrl).toString()
  } catch {
    return {
      ok: false,
      error: `Invalid ANTHROPIC_BASE_URL: ${baseUrl}`,
    }
  }

  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 15_000)

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ model: trimmedModel, keep_alive: 0 }),
      signal: controller.signal,
    })

    if (!response.ok) {
      const body = await response.text().catch(() => '')
      return {
        ok: false,
        error: `Ollama returned HTTP ${response.status}${body ? `: ${body}` : ''}`,
      }
    }

    const payload = (await response.json().catch(() => null)) as
      | { done_reason?: unknown }
      | null
    const doneReason =
      typeof payload?.done_reason === 'string' ? payload.done_reason : undefined

    return { ok: true, doneReason }
  } catch (error) {
    return { ok: false, error: errorMessage(error) }
  } finally {
    clearTimeout(timeout)
  }
}
