import { isNil } from "./isNil.mjs"
import { local } from "./local.mjs"

export function uuid(key) {
  const uuidKey = "rapeflower-uuid"

  const cache = local.read(uuidKey, {})
  if (isNil(cache[key])) cache[key] = 0

  if (cache[key] >= Number.MAX_SAFE_INTEGER - 10000) cache[key] = 0
  cache[key]++
  local.save(uuidKey, cache)
  return cache[key]
}
