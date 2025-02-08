globalThis.rapeflower ??= {};
rapeflower.uuid = {
  value(key) {
    const { local } = rapeflower || {}
    const uuidKey = "rapeflower-uuid"

    const cache = local.read(uuidKey, {})
    if (isNil(cache[key])) cache[key] = 0
   
    if (cache[key] >= Number.MAX_SAFE_INTEGER - 10000) cache[key] = 0
    cache[key]++
    local.save(uuidKey, cache)
    return cache[key]
  },
}

function isNil(value) {
  return value == null
}
