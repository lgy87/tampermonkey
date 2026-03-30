import { emptyArray } from "./emptyArray.mjs"
import { emptyObject } from "./emptyObject.mjs"
import { ensureArray } from "./ensureArray.mjs"

export function h(tag, { children = emptyArray, ...rest } = emptyObject) {
  const ensuredArray = ensureArray(children)
  return React.createElement(tag, rest, ...ensuredArray)
}
