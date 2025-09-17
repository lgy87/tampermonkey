globalThis.rapeflower ??= {}
rapeflower.setNativeValue = (element, value, events) => {
  const { set } = Object.getOwnPropertyDescriptor(element, "value") || {}
  const prototype = Object.getPrototypeOf(element)
  const { set: prototypeSet } =
    Object.getOwnPropertyDescriptor(prototype, "value") || {}

  if (set && set !== prototypeSet) {
    prototypeSet.call(element, value)
  } else {
    set.call(element, value)
  }

  const eventsArray = ensureArray(events)
  eventsArray.forEach(event => {
    element.dispatchEvent(new Event(event, { bubbles: true }))
  })
}

const ensureArray = args => {
  return Array.isArray(args) ? args : [args]
}
