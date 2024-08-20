globalThis.rapeflower ??= {}
rapeflower.defaultId = "react-root-container__"
rapeflower.createRoot = (() => {
  const normalize = key => key.replace(/([A-Z])/g, x => "-" + x.toLowerCase())

  const addStyleTo = (element, style) => {
    if (!Object.keys(style).length) return element
    Object.keys(style).forEach(key => {
      element.style[normalize(key)] = style[key]
    })
    return element
  }
  return (tag = "div", id = rapeflower.defaultId, props = {}) => {
    const exists = document.getElementById(id)
    if (exists) return exists

    const element = document.createElement(tag)
    element.id = id
    props.className && (element.className = props.className)
    addStyleTo(element, props.style)

    document.body.appendChild(element)
    return element
  }
})()
