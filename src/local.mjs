import safeParse from "./safeParse.mjs"

export default {
  read(key, defaults) {
    return safeParse(localStorage.getItem(key), defaults)
  },
  save(key, value) {
    return localStorage.setItem(key, JSON.stringify(value))
  },
  remove(key) {
    return localStorage.removeItem(key)
  },
  clear() {
    return localStorage.clear()
  },
}
