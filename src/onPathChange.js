globalThis.rapeflower ??= {}

let inited = false
rapeflower.onPathChange = fn => {
  if (inited) return
  window.addEventListener("popstate", () => fn(location.pathname))

  const originPushState = history.pushState
  history.pushState = function () {
    originPushState.apply(this, arguments)
    fn(arguments[2])
  }

  const originReplaceState = history.replaceState
  history.replaceState = function () {
    originReplaceState.apply(this, arguments)
    fn(arguments[2])
  }
  inited = true
}
