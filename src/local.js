globalThis.rapeflower ??= {};
globalThis.rapeflower.local = {
  read(key, defaults) {
    return rapeflower.safeParse(localStorage.getItem(key), defaults);
  },
  save(key, value) {
    return localStorage.setItem(key, JSON.stringify(value));
  },
  remove(key) {
    return localStorage.removeItem(key);
  },
  clear() {
    return localStorage.clear();
  },
};
