const waitFor = (selectors, interval = 100, maxTry = 30) => new Promise((resolve, reject) => {
  let count = 0
  const isArray = Array.isArray(selectors)
  const array = isArray ? [selectors] : selectors
  const f = () => {
    const $elements = array.map(selector => $(selector))
    if ($elements.every($element => $element.length > 0)) {
      return resolve(isArray ? $elements : $elements[0])
    }

    if (count++ > maxTry) {
      console.log("can't find: ", selectors)
      return reject()
    }
    setTimeout(f, interval)
  }
  f()
})

globalThis.rapeflower = globalThis.rapeflower || {}
globalThis.rapeflower.waitFor = waitFor
