globalThis.rapeflower ??= {}
rapeflower.defaultId = "react-root-container__"
globalThis.rapeflower.createRoot = (tag = "div", id = rapeflower.defaultId) => {
  const exists = document.getElementById(id)
  if (exists) return exists

  const element = document.createElement(tag)
  element.id = id
  document.body.appendChild(element)
  return element
}
