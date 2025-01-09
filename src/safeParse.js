globalThis.rapeflower ??= {};
globalThis.rapeflower.safeParse = (json, defaults) => {
  try {
    if (isNil(value)) return defaults;
    return JSON.parse(json || "null");
  } catch (e) {
    console.error(e?.message || e);
    return defaults;
  }
};

function isNil(value) {
  return value == null;
}
