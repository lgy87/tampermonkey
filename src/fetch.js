globalThis.rapeflower ??= {}
rapeflower.fetch = ({
  url,
  method = "GET",
}) => {
  return new Promise((resolve, reject) => {
    GM_xmlhttpRequest({
      url,
      method: method.toUpperCase(),
      onload(response) {
        if (success(response)) {
          return resolve(response.responseText)
        }
        reject(response.responseText)
      },
      onerror(error) {
        reject(error)
      }
    })
  })

  function success(response) {
    return response.status == 200
  }
}
