# prosemirror-compress

## documentation

### \[('compress' || 'uncompress') + ('State' || 'Selection' || 'Step') + 'JSON']()

Renames the keys. Maintains JSON structure.

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
{"selection":{"head":764,"anchor":764}},"doc":{"type":"doc","content":[{"type":"heading","attrs":
```

```json
{"s":{"h":764,"a":764}},"d":{"t":"doc","c":[{"t":"heading","a":
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
