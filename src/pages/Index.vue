<template>
  <div :key="stateNonce">
    <q-page v-if="state == 'initial'" class="flex flex-center">
      <ApiKeyEntry v-on:bot-data="useBot"></ApiKeyEntry>
    </q-page>
    <q-page v-if="state == 'ready'" class="flex flex-center">
      <div class="row">
        <div class="col-sm-12">
          <TelegramBot :bot="localBot"></TelegramBot>
        </div>
        <div class="col-sm-12">
          <q-btn
            color="red"
            v-on:click="logout"
          >
            Log out
          </q-btn>
        </div>
      </div>
    </q-page>
  </div>
</template>

<style scoped>
  p {
    color:rgba(0,0,0,0.5);
  }
</style>

<script>

import ApiKeyEntry from './../components/ApiKeyEntry'
import TelegramBot from './../components/TelegramBot'

export default {
  name: 'PageIndex',
  data: () => {
    return {
      localBot: {},
      stateNonce: 0,
      state: 'initial'
    }
  },
  mounted: function () {
    this.getInitialState()
  },
  components: {
    ApiKeyEntry,
    TelegramBot
  },
  methods: {
    logout: function () {
      localStorage.clear()
      this.state = 'initial'
      this.stateNonce++
    },
    useBot: function (bot) {
      localStorage.setItem('localBot', JSON.stringify(bot))
      this.state = 'ready'
      this.localBot = bot
      this.stateNonce++
    },
    getInitialState: function () {
      const localBot = localStorage.getItem('localBot')
      if (localBot !== null) {
        // Has entered an apikey before
        this.localBot = JSON.parse(localBot)
        this.state = 'ready'
      } else {
        // Not entered an apikey before
        this.state = 'initial'
      }
      this.stateNonce++
    }
  }
}
</script>
