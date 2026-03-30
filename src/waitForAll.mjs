import { emptyObject } from "./emptyObject.mjs"
import waitFor from "./waitFor.mjs"

export default (
  selectors,
  {
    interval = 50,
    maxTry = 100,
    root = document.body,
    predicate = $element => $element?.length > 0,
  } = emptyObject,
) => {
  return Promise.all(
    selectors.map(selector =>
      waitFor(selector, { interval, maxTry, root, predicate }),
    ),
  )
}
