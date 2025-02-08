globalThis.rapeflower ??= {}
rapeflower.waitFor = (selector, {
  interval = 50,
  maxTry = 100,
  root = document.body,
  predicate = $element => $element?.length > 0,
} = {}) => new Promise((resolve, reject) => {
  const $root = $(root)
  let count = 0
  const f = () => {
    const $element = $(selector, $root)
    if (predicate($element)) return resolve($element)

    if (count++ > maxTry) {
      console.log("can't find: ", selector)
      return reject()
    }
    setTimeout(f, interval)
  }

  f()
})

