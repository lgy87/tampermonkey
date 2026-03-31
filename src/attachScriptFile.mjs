export function attachScriptFile(url) {
  const script = document.createElement("script")
  script.type = "module"
  script.crossOrigin = "anonymous"
  script.src = url

  document.head.appendChild(script)
}
