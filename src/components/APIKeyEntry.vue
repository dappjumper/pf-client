<template>
  <q-form
    autofocus
    :action="endpoint"
    method="post"
    v-on:submit.prevent
    @submit="onSubmit"
  >
    <q-input
      label="Enter API Key"
      name="apikey"
      placeholder="Enter your key"
      type="text"
      v-model="apikey"
      :rules="[ val => val && val.length > 0 || 'This field can not be blank']"
    >
    </q-input>
    <br/>
    <q-btn label="Submit" type="submit" color="primary"/>
    <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
  </q-form>
</template>

<script>

import axios from 'axios'

export default {
  name: 'ApiKeyEntry',
  props: {},
  data: () => {
    return {
      localBot: {},
      apikey: '',
      endpoint: (window.location.href.indexOf('localhost') > -1 ? 'http://localhost:8000' : 'https://pf-api.dappjump.io')
    }
  },
  methods: {
    customNotification (text, type) {
      this.$q.notify({
        type: type || 'info',
        message: text,
        position: 'bottom-right'
      })
    },
    customError (text) {
      this.$q.notify({
        type: 'negative',
        message: text || 'Failed contacting server',
        position: 'bottom-right'
      })
    },
    submitError () {
      this.customError('Failed contacting server')
    },
    onSubmit (evt) {
      this.tryApiKey(this.apikey)
    },
    tryApiKey (apikey) {
      axios.post(this.endpoint + '/telegram/checkIn', {
        apikey: apikey
      })
        .then((response) => {
          if (!response.data.error) {
            this.customNotification('Successfully checked in!', 'positive')
            response.data.apikey = this.apikey
            this.$emit('bot-data', response.data)
          } else {
            this.customError(response.data.error || 'API Key did\'nt work')
          }
        })
        .catch(function (error) {
          this.submitError(error)
        }.bind(this))
    }
  }
}
</script>
