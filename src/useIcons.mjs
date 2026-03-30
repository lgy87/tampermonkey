import attachStyleFile from "./attachStyleFile.mjs"

export default function useIcons() {
  return attachStyleFile(
    "https://unpkg.com/@phosphor-icons/web@2.1.1/src/fill/style.css",
  )
}
