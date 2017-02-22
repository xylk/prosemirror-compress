const markTypeValuesMap = {
  em: ['e'],
  strong: ['s'],
  link: ['l'],
  code: ['c'],
}

const markAttrsKeysMap = {
  href: ['h'], // link
  title: ['t'], // link
}

const markKeysMap = {
  type: ['t', markTypeValuesMap],
  attrs: ['a', markAttrsKeysMap],
}

const contentTypeValuesMap = {
  doc: ['d'],
  paragraph: ['p'],
  blockquote: ['b'],
  horizontal_rule: ['h_r'],
  heading: ['h'],
  code_block: ['c_b'],
  text: ['t'],
  image: ['i'],
  hard_break: ['h_b'],
  ordered_list: ['o_l'],
  bullet_list: ['b_l'],
  list_item: ['l_i'],
  table: ['ta'],
  table_row: ['t_r'],
  table_cell: ['t_c'],
}

const contentAttrsKeysMap = {
  level: ['l'], // heading
  src: ['s'], // image
  alt: ['a'], // image
  title: ['t'], // image
  order: ['o'], // ordered_list
  columns: ['c'], // table, table_row
}

const contentKeysMap = {
  type: ['t', contentTypeValuesMap],
  text: ['te'],
  attrs: ['a', contentAttrsKeysMap],
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
