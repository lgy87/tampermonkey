const rapeflower = {
  init(name = "@lgy87", tag = "esm") {
    const map = document.createElement("script")
    map.type = "importmap"
    map.textContent = JSON.stringify({
      imports: {
        [`${name}/`]: `https://cdn.jsdelivr.net/gh/lgy87/tampermonkey@${tag}/src/`,
      },
    })
    document.head.appendChild(map)
  },
}

rapeflower.init()
globalThis.initImportMap = rapeflower.init
