const rapeflower = {
  defaults: {
    "@esm/": "https://esm.sh/",
    "@lgy87/": "https://cdn.jsdelivr.net/gh/lgy87/tampermonkey@esm/src/",
  },
  create() {
    const script = document.createElement("script")
    script.type = "importmap"
    return script
  },
  appendToHead(imports) {
    const script = this.create()
    script.textContent = JSON.stringify({ imports })
    document.head.appendChild(script)
  },
  add(name, tag) {
    if (!name || !tag) return

    const key = `${name}/`
    const url = `https://cdn.jsdelivr.net/gh/lgy87/tampermonkey@${tag}/src/`
    this.appendToHead({ [key]: url })
  },
  init() {
    this.appendToHead(this.defaults)
  },
}

rapeflower.init()
globalThis.addImportMap = rapeflower.add.bind(rapeflower)
