globalThis.rapeflower ??= {}
globalThis.rapeflower.waitForAll = (selectors, {
  interval = 50,
  maxTry = 100,
  predicate = $element => $element?.length > 0,
}) => new Promise((resolve, reject) => {
  let count = 0
  const f = () => {
    const $elements = selectors.map(selector => $(selector))
    if ($elements.every(predicate)) {
      return resolve($elements)
    }

    if (count++ > maxTry) {
      console.log("can't find: ", selectors)
      return reject()
    }
    setTimeout(f, interval)
  }
  f()
})

