const markKeysMap = {
  type: ['t'],
  attrs: ['a'],
}

const contentKeysMap = {
  type: ['t'],
  text: ['te'],
  attrs: ['a'],
  level: ['l'],
  marks: ['m', markKeysMap],
}
contentKeysMap.content = ['c', contentKeysMap]

const sliceKeysMap = {
  content: ['c', contentKeysMap],
  openLeft: ['oL'],
  openRight: ['oR'],
}

export const stepKeysMap = {
  stepType: ['sT'],
  from: ['f'],
  to: ['t'],
  structure: ['st'],
  insert: ['i'],
  gapFrom: ['gF'],
  gapTo: ['gT'],
  slice: ['s', sliceKeysMap],
  mark: ['m', markKeysMap],
}

export const selectionKeysMap = {
  head: ['h'],
  anchor: ['a'],
  node: ['n'],
  after: ['af'],
}

export const stateKeysMap = {
  doc: ['d', contentKeysMap],
  selection: ['s', selectionKeysMap],
  storedMarks: ['sM', markKeysMap],
}
