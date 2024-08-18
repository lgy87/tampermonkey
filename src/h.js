const emptyArray = []
const emptyObject = {}

const h = (tag, { children = emptyArray, ...rest } = emptyObject) => {
  const ensuredArray = rx.ensureArray(children)
  return React.createElement(
    tag,
    rest,
    ...ensuredArray,
  )
}

globalThis.rapeflower ??= {}
globalThis.rapeflower.h = h
