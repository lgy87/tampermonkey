globalThis.rapeflower ??= {}
globalThis.rapeflower.waitFor = (selector, {
  interval = 50,
  maxTry = 100,
  predicate = $element => $element?.length > 0,
} = {}) => new Promise((resolve, reject) => {
  let count = 0
  const f = () => {
    const $element = $(selector)
    if (predicate($element)) return resolve($element)

    if (count++ > maxTry) {
      console.log("can't find: ", selector)
      return reject()
    }
    setTimeout(f, interval)
  }

  f()
})

