import isNil from "./isNil.mjs"

export default (json, defaults = json) => {
  try {
    if (isNil(json)) return defaults
    return JSON.parse(json)
  } catch (e) {
    console.error(e?.message || e)
    return defaults
  }
}
