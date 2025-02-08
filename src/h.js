globalThis.rapeflower ??= {}
rapeflower.emptyArray ??= []
rapeflower.emptyObject ??= {}
rapeflower.h = (tag, { children = rapeflower.emptyArray, ...rest } = rapeflower.emptyObject) => {
  const ensuredArray = rapeflower.rx.ensureArray(children)
  return React.createElement(
    tag,
    rest,
    ...ensuredArray,
  )
}
