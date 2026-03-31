export * from "https://esm.sh/preact"
export * from "https://esm.sh/preact/hooks"
export * from "https://esm.sh/@preact/signals"
import { h } from "https://esm.sh/preact"
import htm_ from "https://esm.sh/htm"

export const htm = htm_.bind(h)
