import { isLocalModelMode, isLoopbackHttpUrl } from './envUtils.js'
import { errorMessage } from './errors.js'

export type LocalModelProvider = 'ollama' | 'lmstudio'

export type LocalModelUnloadResult =
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

function getLocalModelProviderEnv(): string {
  return (
    process.env.CLAUDE_CODE_LOCAL_MODEL_PROVIDER ??
    process.env.CLAUDE_DEV_LOCAL_PROVIDER ??
    ''
  )
}

export function getLocalModelProvider(): LocalModelProvider {
  const provider = getLocalModelProviderEnv().toLowerCase().trim()
  if (
    provider === 'lmstudio' ||
    provider === 'lm-studio' ||
    provider === 'lm_studio'
  ) {
    return 'lmstudio'
  }
  return 'ollama'
}

export function getLocalModelProviderLabel(): string {
  return getLocalModelProvider() === 'lmstudio' ? 'LM Studio' : 'Ollama'
}

export function getLocalModelProviderRuntimeLabel(): string {
  return `Local ${getLocalModelProviderLabel()} runtime · Tao Creative Labs`
}

export function isCloudBackedLocalModel(model: string | undefined): boolean {
  if (getLocalModelProvider() !== 'ollama') {
    return false
  }

  const normalized = model?.trim().toLowerCase()
  if (!normalized) {
    return false
  }

  return normalized.includes(':cloud')
}

function buildLocalAuthHeaders(): Record<string, string> {
  const token =
    process.env.ANTHROPIC_AUTH_TOKEN ??
    process.env.ANTHROPIC_API_KEY ??
    process.env.CLAUDE_DEV_LMSTUDIO_API_KEY

  if (!token) {
    return { 'Content-Type': 'application/json' }
  }

  return {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  }
}

async function resolveLmStudioInstanceId(
  baseUrl: string,
  modelOrInstanceId: string,
): Promise<string> {
  const endpoint = new URL('/api/v1/models', baseUrl).toString()
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 15_000)

  try {
    const response = await fetch(endpoint, {
      method: 'GET',
      headers: buildLocalAuthHeaders(),
      signal: controller.signal,
    })

    if (!response.ok) {
      return modelOrInstanceId
    }

    const payload = (await response.json().catch(() => null)) as
      | {
          models?: Array<{
            key?: unknown
            loaded_instances?: Array<{
              id?: unknown
            }>
          }>
        }
      | null

    for (const model of payload?.models ?? []) {
      for (const instance of model.loaded_instances ?? []) {
        if (instance?.id === modelOrInstanceId) {
          return modelOrInstanceId
        }
      }

      if (model?.key === modelOrInstanceId) {
        const firstLoadedInstance = model.loaded_instances?.find(
          instance => typeof instance?.id === 'string' && instance.id.length > 0,
        )
        return firstLoadedInstance?.id ?? modelOrInstanceId
      }
    }

    return modelOrInstanceId
  } catch {
    return modelOrInstanceId
  } finally {
    clearTimeout(timeout)
  }
}

async function unloadOllamaModelFromMemory(
  baseUrl: string,
  model: string,
): Promise<LocalModelUnloadResult> {
  const endpoint = new URL('/api/generate', baseUrl).toString()
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 15_000)

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ model, keep_alive: 0 }),
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

async function unloadLmStudioModelFromMemory(
  baseUrl: string,
  model: string,
): Promise<LocalModelUnloadResult> {
  const endpoint = new URL('/api/v1/models/unload', baseUrl).toString()
  const instanceId = await resolveLmStudioInstanceId(baseUrl, model)
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 15_000)

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: buildLocalAuthHeaders(),
      body: JSON.stringify({ instance_id: instanceId }),
      signal: controller.signal,
    })

    if (!response.ok) {
      const body = await response.text().catch(() => '')
      return {
        ok: false,
        error: `LM Studio returned HTTP ${response.status}${body ? `: ${body}` : ''}`,
      }
    }

    const payload = (await response.json().catch(() => null)) as
      | { status?: unknown }
      | null
    const doneReason =
      typeof payload?.status === 'string' ? payload.status : undefined

    return { ok: true, doneReason }
  } catch (error) {
    return { ok: false, error: errorMessage(error) }
  } finally {
    clearTimeout(timeout)
  }
}

export async function unloadLocalModelFromMemory(
  model: string,
): Promise<LocalModelUnloadResult> {
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
      error: `ANTHROPIC_BASE_URL must point to a loopback ${getLocalModelProviderLabel()} server (localhost or 127.0.0.1).`,
    }
  }

  if (isCloudBackedLocalModel(trimmedModel)) {
    return {
      ok: false,
      error:
        'Cloud-backed Ollama models are disabled in Tiny Crab local-only mode.',
    }
  }

  if (getLocalModelProvider() === 'lmstudio') {
    return unloadLmStudioModelFromMemory(baseUrl, trimmedModel)
  }

  return unloadOllamaModelFromMemory(baseUrl, trimmedModel)
}
