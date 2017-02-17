function invertKeysMap(keysMap) {
  const recursiveInverseKeys = []
  const inverseKeysMap = Object.assign(...Object.entries(keysMap).map(
    function ([ key, [ inverseKey, valueKeysMap ] ]) {
      return {
        [inverseKey]: [
          key,
          valueKeysMap && (
            valueKeysMap === keysMap ?
              recursiveInverseKeys.push(inverseKey)
            :
              invertKeysMap(valueKeysMap)
          ),
        ],
      }
    }
  ))
  recursiveInverseKeys.forEach(
    function (inverseKey) {
      inverseKeysMap[inverseKey][1] = inverseKeysMap
    }
  )
  return inverseKeysMap
}

function mapKeys(keysMap, obj) {
  return (
    Array.isArray(obj) ?
      obj.map(mapKeys.bind(0, keysMap))
    :
      Object.assign({}, ...Object.entries(obj).map(
        function ([ key, value ]) {
          const [ mappedKey = key, valueKeysMap ] = keysMap[key] || []
          return {
            [mappedKey]: (
              valueKeysMap && value ?
                mapKeys(valueKeysMap, value)
              :
                value
            ),
          }
        }
      ))
  )
}

export function keysMappers(keysMap) {
  return [
    mapKeys.bind(0, keysMap),
    mapKeys.bind(0, invertKeysMap(keysMap)),
  ]
}

export function compressStepsLossy(steps, mergedSteps = []) {
  for (let i = 1, step = steps[0]; i <= steps.length; i++)
    step = steps[i] && step.merge(steps[i]) || mergedSteps.push(step) && steps[i]
  return mergedSteps
}
