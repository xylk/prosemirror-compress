import { stateKeysMap, selectionKeysMap, stepKeysMap } from './maps'
import { keysMappers } from './functions'

export const uncompressStateJSON = keysMappers(stateKeysMap)[1]
export const uncompressSelectionJSON = keysMappers(selectionKeysMap)[1]
export const uncompressStepJSON = keysMappers(stepKeysMap)[1]

delete selectionKeysMap['type']
delete stepKeysMap['slice'][1]['openStart']
delete stepKeysMap['slice'][1]['openEnd']

export const compressStateJSON = keysMappers(stateKeysMap)[0]
export const compressSelectionJSON = keysMappers(selectionKeysMap)[0]
export const compressStepJSON = keysMappers(stepKeysMap)[0]

export { compressStepsLossy, keysMappers, } from './functions'
