globalThis.rapeflower ??= {}
globalThis.rapeflower.emptyArray = []
globalThis.rapeflower.emptyObject = {}
globalThis.rapeflower.h = (tag, { children = rapeflower.emptyArray, ...rest } = rapeflower.emptyObject) => {
  const ensuredArray = rapeflower.rx.ensureArray(children)
  return React.createElement(
    tag,
    rest,
    ...ensuredArray,
  )
}
