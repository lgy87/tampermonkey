globalThis.rapeflower ??= {}
globalThis.rapeflower.waitForAll = (selectors, {
  interval = 50,
  maxTry = 100,
  predicate = $element => $element?.length > 0,
}) => {
  const { waitFor } = globalThis.rapeflower
  return Promise.all(selectors.map(selector => waitFor(selector, { interval, maxTry, predicate })))
}

