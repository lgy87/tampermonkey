const map = document.createElement("script")
map.type = "importmap"
map.textContent = JSON.stringify({
  imports: {
    "@lgy87/": "https://cdn.statically.io/gh/lgy87/tampermonkey@esm/src/",
  },
})
document.head.appendChild(map)
