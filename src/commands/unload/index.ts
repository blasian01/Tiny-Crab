import type { Command } from '../../commands.js'
import { isLocalModelMode } from '../../utils/envUtils.js'

const unload = {
  type: 'local',
  name: 'unload',
  description: 'Unload an Ollama model from memory',
  argumentHint: '[model]',
  supportsNonInteractive: true,
  isEnabled: () => isLocalModelMode(),
  load: () => import('./unload.js'),
} satisfies Command

export default unload
