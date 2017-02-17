# prosemirror-compress

## documentation

### compressStateJSON(), uncompressStateJSON(), compressSelectionJSON(), uncompressSelectionJSON(), compressStepJSON(), uncompressStepJSON()

Renames the keys.

```js
let compressedStateJSON = compressStateJSON(/*editorState*/.toJSON())
let editorState = EditorState.fromJSON(/*config*/, uncompressStateJSON(compressedStateJSON))

let compressedSelectionJSON = compressSelectionJSON(/*selection*/.toJSON())
let selection = Selection.fromJSON(/*doc*/, compressedSelectionJSON)

let compressedStepsJSON = /*steps array*/.map(step => compressStepJSON(step.toJSON()))
let steps = compressedStepsJSON.map(json => Step.fromJSON(/*schema*/, uncompressStepJSON(json))
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
