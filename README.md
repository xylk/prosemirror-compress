# prosemirror-compress

## documentation

### \[('compress' || 'uncompress') + ('State' || 'Selection' || 'Step') + 'JSON']()

Renames known keys and values. Maintains JSON structure.

```js
let compressedStateJSON = compressStateJSON(/*editorState*/.toJSON())
let editorState = EditorState.fromJSON(/*config*/, uncompressStateJSON(compressedStateJSON))

let compressedSelectionJSON = compressSelectionJSON(/*selection*/.toJSON())
let selection = Selection.fromJSON(/*doc*/, uncompressSelectionJSON(compressedSelectionJSON))

let compressedStepsJSON = /*steps array*/.map(step => compressStepJSON(step.toJSON()))
let steps = compressedStepsJSON.map(json => Step.fromJSON(/*schema*/, uncompressStepJSON(json))
```

#### uncompressed vs compressed

```json
{"selection":{"head":0,"anchor":0}},"doc":{"type":"doc","content":[{"type":"heading","attrs":{"level":3},
```

```json
{"s":{"h":0,"a":0}},"d":{"t":"d","c":[{"t":"h","a":{"l":3},
```

### compressStepsLossy()

[Merges](https://prosemirror.net/ref.html#transform.Step.merge) all the [steps](https://prosemirror.net/ref.html#transform.Steps) that can be merged.

```js
let steps = compressStepsLossy(/*steps array*/)
```

### keysMappers()

For compressing and uncompressing using custom [keys maps](src/keysMaps.js).

```js
let [ keysMapper, inverseKeysMapper ] = keysMappers(/*keysMap*/)
let compressedJSON = keysMapper(/*json*/)
let json = inverseKeysMapper(compressedJSON)
```

## license

[MIT license](LICENSE).
