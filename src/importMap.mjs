const rapeflower = {
  cached: {
    "@esm/": "https://esm.sh/",
    "@lgy87/": "https://cdn.jsdelivr.net/gh/lgy87/tampermonkey@esm/src/",
  },
  cache(key, url) {
    if (this.cached[key]) return

    this.cached[key] = url
  },
  init() {
    const map = document.createElement("script")
    map.type = "importmap"
    map.textContent = JSON.stringify({ imports: this.cached })
    document.head.appendChild(map)
  },
  add(name, tag) {
    if (!name || !tag) return

    const key = `${name}/`
    const url = `https://cdn.jsdelivr.net/gh/lgy87/tampermonkey@${tag}/src/`
    this.cache(key, url)

    const map = document.createElement("script")
    map.type = "importmap"
    map.textContent = JSON.stringify({
      imports: { [key]: url },
    })
    document.head.appendChild(map)
  },
}

rapeflower.init()
globalThis.addImportMap = rapeflower.add.bind(rapeflower)
