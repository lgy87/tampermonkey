import { ensureArray } from "./ensureArray.mjs"

export function setNativeValue(el, value, events) {
  const element = isJQ(el) ? el.get(0) : el
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

const isJQ = value => {
  if (value instanceof Element) return false
  return !!value.jquery
}
