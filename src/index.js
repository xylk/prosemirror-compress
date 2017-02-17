import { stateKeysMap, selectionKeysMap, stepKeysMap } from './keysMaps'
import { keysMappers } from './functions'

export const [ compressStateJSON, uncompressStateJSON ] = keysMappers(stateKeysMap)
export const [ compressSelectionJSON, uncompressSelectionJSON ] = keysMappers(selectionKeysMap)
export const [ compressStepJSON, uncompressStepJSON ] = keysMappers(stepKeysMap)

export { compressStepsLossy, keysMappers, } from './functions'
