/*
export function someGetter (state) {
}
*/
export function getApikey (state) {
  return state.apikey || localStorage.getItem('apikey')
}
