/*
export function someAction (context) {
}
*/

import axios from 'axios'

function query ({ state, setters }, payload, internal) {
  return new Promise((resolve, reject) => {
    const apikey = payload.apikey || state.apikey
    const url = state.endpoint[(internal ? 'internal' : 'external')](payload.method, apikey)
    const options = {
      method: (payload.data ? 'post' : 'get'),
      url: url,
      timeout: 4000
    }
    if (payload.data) options.data = payload.data
    axios(options)
      .then(response => {
        resolve(response)
      })
      .catch(error => {
        reject(error)
      })
  })
}

export function externalQuery ({ state, setters }, payload) {
  return query({ state, setters }, payload, false)
}

export function internalQuery ({ state, setters }, payload) {
  return query({ state, setters }, payload, true)
}

export const logOut = (state) => {
  state.apikey = ''
  state.data = {}
  state.isLoggedIn = false
  state.allowInternal = false
  localStorage.removeItem('apikey')
  localStorage.removeItem('allowInternal')
}
