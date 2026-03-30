const map = document.createElement("script")
map.type = "importmap"
map.textContent = JSON.stringify({
  imports: {
    "@lgy87/": "https://cdn.jsdelivr.net/gh/lgy87/tampermonkey@esm/src/",
  },
})
document.head.appendChild(map)
