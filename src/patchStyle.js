globalThis.rapeflower ??= {}
globalThis.rapeflower.patchStyle = (style) => {
  $('<style type="text/css" />')
    .html(style)
    .appendTo($("head"))
}

