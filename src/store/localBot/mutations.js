export const setActiveBot = (state, payload) => {
  if (!payload.apikey || !payload.data) return false
  state.apikey = payload.apikey
  state.data = payload.data
  localStorage.setItem('apikey', payload.apikey)
  state.isLoggedIn = true
}

export const setLoggedIn = (state, data) => {
  state.isLoggedIn = true
  state.data = data
}

export const setAllowInternal = (state, data) => {
  state.allowInternal = data
  localStorage.setItem('allowInternal', data)
}
