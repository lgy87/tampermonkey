import { attachStyleFile } from "./attachStyleFile.mjs"

export function useIcons() {
  return attachStyleFile(
    "https://unpkg.com/@phosphor-icons/web@2.1.1/src/fill/style.css",
  )
}
