<template>
  <q-page>
    <BotController v-on:status="botStatusChanged"></BotController>
  </q-page>
</template>

<style scoped>
  p {
    color:rgba(0,0,0,0.5);
  }
</style>

<script>

// import ApiKeyEntry from './../components/ApiKeyEntry'
import BotController from './../components/BotController'

export default {
  name: 'PageIndex',
  data: () => {
    return {}
  },
  mounted: function () {},
  components: {
    BotController
  },
  methods: {
    botStatusChanged: function (val) {
      console.log('Status changed: ' + val)
    }
  }
}
</script>
