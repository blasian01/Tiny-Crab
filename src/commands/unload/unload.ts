import { COMMON_HELP_ARGS } from '../../constants/xml.js'
import type { LocalCommandCall } from '../../types/command.js'
import { unloadOllamaModelFromMemory } from '../../utils/ollamaLocal.js'

export const call: LocalCommandCall = async (args, context) => {
  const trimmedArgs = args.trim()

  if (COMMON_HELP_ARGS.includes(trimmedArgs)) {
    return {
      type: 'text',
      value:
        'Unload the active local model with /unload, or unload a specific model with /unload <model>.',
    }
  }

  const model = trimmedArgs || context.options.mainLoopModel
  if (!model) {
    return {
      type: 'text',
      value: 'No model is currently selected.',
    }
  }

  const result = await unloadOllamaModelFromMemory(model)
  if (!result.ok) {
    return {
      type: 'text',
      value: `Failed to unload '${model}': ${result.error}`,
    }
  }

  const reasonSuffix = result.doneReason ? ` (${result.doneReason})` : ''
  return {
    type: 'text',
    value: `Unloaded model '${model}' from memory${reasonSuffix}.`,
  }
}
