function retrieveFromLocalStorage (key) {
  return localStorage.getItem(key)
}

export default function () {
  return {
    isLoggedIn: false,
    apikey: retrieveFromLocalStorage('apikey'),
    endpoint: {
      external: function (method, injectedApikey) {
        return 'https://api.telegram.org/bot' + (injectedApikey || this.apikey) + (method ? '/' + method : '')
      },
      internal: function (method) {
        // TODO
      }
    },
    allowInternal: retrieveFromLocalStorage('allowInternal') || false,
    error: {},
    data: {}
  }
}
