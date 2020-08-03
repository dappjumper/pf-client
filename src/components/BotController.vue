<template>
  <div class="fullscreen" :class="{ state: true }">
    <Spinner :active="state == 'loading'"/>
    <div :key="state" v-if="isLoggedIn">
      Loaded
      {{ $store.state.localBot }}
    </div>
    <div class="form supercenter" v-if="!isLoggedIn">
      <q-form
            @submit="onSubmit"
            @reset="onReset"
            class="q-gutter-md"
          >
            <h2>
              Enter your API Key
            </h2>
            <p>
              An API Key can be obtained from the official Telegram <a href="https://t.me/botfather" target="_blank">@botfather</a>
            </p>
            <q-input
              filled
              v-model="apikey_input"
              label="API key *"
              hint="Your telegram bot API key"
              lazy-rules
              :rules="[v => !!v || 'Please type your key here']"
            />

            <q-toggle v-on:input="$store.commit('localBot/setAllowInternal', accept)" v-model="accept" label="Allow this service to use your key for additional functionality" />

            <div>
              <q-btn label="Submit" type="submit" color="primary"/>
              <q-btn label="Back" type="reset" color="primary" flat class="q-ml-sm" />
            </div>
          </q-form>
    </div>
  </div>
</template>

<style scoped>
  .fullscreen {
    position:absolute;
    padding:32px;
    top:0;
    left:0;
    width:100%;
    height:100%;
    z-index:1;
    background: #fafafa;
  }
  .fullscreen.loading {
    background:#333333;
    color:#fafafa;
  }
  .supercenter  {
    max-width:600px;
    width:600px;
    margin:0 auto;
    position:absolute;
    top:50%;
    left:50%;
    margin-left:-300px;
    transform:translate(0,-50%);
  }
</style>

<script>

import Spinner from './Spinner'
import { mapActions } from 'vuex'

export default {
  name: 'BotController',
  props: ['serviceDomain'],
  components: {
    Spinner: Spinner
  },
  data: () => {
    return {
      state: 'loading',
      apikey_input: '',
      accept: false
    }
  },
  computed: {
    isLoggedIn () {
      return this.$store.state.localBot.isLoggedIn
    }
  },
  mounted: function () {
    const activeKey = this.$store.state.localBot.apikey
    this.accept = this.$store.state.localBot.allowInternal || 'false'
    this.accept = JSON.parse(this.accept)
    if (!activeKey) {
      this.state = 'initial'
    } else {
      this.state = 'loading'
      this.fetchInitialBotData(activeKey)
    }
  },
  methods: {
    ...mapActions('localBot', [
      'externalQuery'
    ]),
    fetchInitialBotData: function (injectedApikey) {
      console.log('InjectedKey = ', injectedApikey)
      this.externalQuery({
        method: 'getMe',
        apikey: injectedApikey || this.apikey_input
      })
        .then((result) => {
          if (result.data.ok) {
            this.$store.commit('localBot/setActiveBot', {
              apikey: injectedApikey || this.apikey_input,
              data: result.data.result
            })
            this.state = 'ready'
          }
        })
        .catch((error) => {
          console.log('It failed', error)
          this.$q.notify({
            type: 'negative',
            message: 'API key did not work',
            position: 'bottom-right'
          })
          console.log(error)
          this.state = 'initial'
        })
    },
    onSubmit: function () {
      // TODO
      this.state = 'loading'
      this.fetchInitialBotData()
    },
    onReset: function () {
      window.location.href = ''
    }
  }
}
</script>
