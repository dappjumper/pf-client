function retrieveFromLocalStorage (key) {
  return localStorage.getItem(key)
}

export default function () {
  return {
    isLoggedIn: false,
    apikey: retrieveFromLocalStorage('apikey'),
    endpoint: {
      external: function (method, injectedApikey) {
        return 'https://api.telegram.org/bot' + (injectedApikey || retrieveFromLocalStorage('apikey')) + (method ? '/' + method : '')
      },
      internal: function (method) {
        // TODO
      },
      file: function (path, injectedApikey) {
        return 'https://api.telegram.org/file/bot' + (injectedApikey || retrieveFromLocalStorage('apikey')) + (path ? '/' + path : '')
      }
    },
    allowInternal: retrieveFromLocalStorage('allowInternal') || false,
    error: {},
    data: {}
  }
}
