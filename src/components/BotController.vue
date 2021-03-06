<template>
  <div class="fullscreen" :class="{ state: state }">
    <Spinner :active="state == 'loading'"/>
    <div :key="state" v-if="isLoggedIn">
      <DashboardPage page="dashboard" v-if="$route.path == '/app'"/>
      <DashboardPage page="chat" v-if="$route.path == '/app/chat'"/>
      <DashboardPage page="statistics" v-if="$route.path == '/app/statistics'"/>
      <DashboardPage page="modules" v-if="$route.path == '/app/modules'"/>
      <DashboardPage page="settings" v-if="$route.path == '/app/settings'"/>
      <DashboardPage page="about" v-if="$route.path == '/app/about'"/>
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

            <q-toggle unselectable v-on:input="$store.commit('localBot/setAllowInternal', accept)" v-model="accept" label="Allow this service to use API key" />

            <div>
              <q-btn style="transition: all .1s" :class="{notallowed: !accept}" label="Submit" type="submit" color="primary"/>
              <q-btn label="Back" type="reset" color="primary" flat class="q-ml-sm" />
            </div>
          </q-form>
    </div>
  </div>
</template>

<style scoped>
  .notallowed {
    pointer-events:none;
    opacity:0.5;
    filter:grayscale(100%);
  }
  .fullscreen {
    position:absolute;
    padding:32px;
    top:0;
    left:0;
    width:100%;
    height:100vh;
    z-index:1;
  }
  .fullscreen.loading {
    background:#fafafa;
    color:#333333;
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
  @media only screen and (max-width: 600px) {
    .supercenter {
      position: absolute;
      top: 0;
      left: 0;
      margin: 32px;
      transform: none;
      width: auto;
    }
    .fullscreen {
      border-top-left-radius:0!important;
    }
  }
</style>

<script>

import Spinner from './Spinner'
import DashboardPage from './dashboard/DashboardPage'
import { mapActions } from 'vuex'

export default {
  name: 'BotController',
  props: ['serviceDomain'],
  components: {
    Spinner: Spinner,
    DashboardPage: DashboardPage
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
      this.$emit('rooted')
    } else {
      this.state = 'loading'
      this.fetchInitialBotData(activeKey)
    }
  },
  methods: {
    ...mapActions('localBot', [
      'externalQuery',
      'internalQuery'
    ]),
    fetchInitialBotData: function (injectedApikey) {
      this.internalQuery({
        method: 'checkIn',
        save: 'botGetMe',
        data: {},
        apikey: injectedApikey || this.apikey_input
      })
        .then((result) => {
          console.log('result', result)
          // if (result.data.ok) {
          //   this.$store.commit('localBot/setApikey', injectedApikey || this.apikey_input)
          //   this.$store.commit('localBot/setLoggedIn')
          //   this.state = 'ready'
        })
        .catch((error) => {
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
      if (!this.accept) {
        return this.$q.notify({
          type: 'negative',
          message: 'Please allow this service to use your API key',
          position: 'bottom-right'
        })
      }
      this.state = 'loading'
      this.fetchInitialBotData()
    },
    onReset: function () {
      window.location.href = ''
    }
  }
}
</script>
