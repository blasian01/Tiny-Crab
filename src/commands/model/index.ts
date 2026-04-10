import type { Command } from '../../commands.js'
import { shouldInferenceConfigCommandBeImmediate } from '../../utils/immediateCommand.js'
import { isLocalModelMode } from '../../utils/envUtils.js'
import { getMainLoopModel, renderModelName } from '../../utils/model/model.js'

export default {
  type: 'local-jsx',
  name: 'model',
  aliases: ['changemodel'],
  get description() {
    return isLocalModelMode()
      ? `Set the local model for Tiny Crab (currently ${renderModelName(getMainLoopModel())})`
      : `Set the model for Tiny Crab (currently ${renderModelName(getMainLoopModel())})`
  },
  argumentHint: '[model]',
  get immediate() {
    return shouldInferenceConfigCommandBeImmediate()
  },
  load: () => import('./model.js'),
} satisfies Command
