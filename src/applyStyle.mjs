export function applyStyle(style) {
  const tag = document.createElement("style")
  tag.textContent = style
  document.documentElement.appendChild(tag)
}
