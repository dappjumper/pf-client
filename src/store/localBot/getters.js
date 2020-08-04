/*
export function someGetter (state) {
}
*/
export function getApikey (state) {
  return state.apikey || localStorage.getItem('apikey')
}

export function getSavedData (state, key) {
  return (key) => {
    return state.data[key] || {}
  }
}
