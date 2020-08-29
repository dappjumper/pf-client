/*
export function someAction (context) {
}
*/

import axios from 'axios'

function query ({ state, setters }, payload, endpointType) {
  return new Promise((resolve, reject) => {
    const apikey = payload.apikey || state.apikey
    const url = state.endpoint[endpointType || 'internal'](payload.method, apikey)
    const options = {
      method: (payload.data ? 'post' : 'get'),
      url: url,
      timeout: 4000
    }
    if (payload.data) options.data = payload.data
    if (endpointType === 'internal') {
      options.headers = {
        'X-API-KEY': payload.apikey
      }
    }
    axios(options)
      .then(response => {
        if (payload.save) state.data[payload.save] = response.data.result
        resolve(response)
      })
      .catch(error => {
        reject(error)
      })
  })
}

export function externalQuery ({ state, setters }, payload) {
  return query({ state, setters }, payload, 'external')
}

export function internalQuery ({ state, setters }, payload) {
  return query({ state, setters }, payload, 'internal')
}

export const logOut = (state) => {
  state.apikey = ''
  state.data = {}
  state.isLoggedIn = false
  state.allowInternal = false
  localStorage.removeItem('apikey')
  localStorage.removeItem('allowInternal')
}
