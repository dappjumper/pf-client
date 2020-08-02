export const setActiveBot = (state, payload) => {
  state.apikey = payload.apikey
  state.data = payload.data
  localStorage.setItem('apikey', payload.apikey)
}

export const setLoggedIn = (state, data) => {
  state.isLoggedIn = true
  state.data = data
}
