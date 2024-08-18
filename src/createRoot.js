const id = "react-root-container__"

const createRoot = (tag = "div", id = id) => {
  const exists = document.getElementById(id)
  if (exists) return exists

  const element = document.createElement(tag)
  element.id = id
  document.body.appendChild(element)
  return element
}

globalThis.rapeflower ??= {}
globalThis.rapeflower.createRoot = createRoot
