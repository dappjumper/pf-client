<template>
  <q-page>
    <BotController></BotController>
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
import { mapState } from 'vuex'

export default {
  name: 'PageIndex',
  data: () => {
    return {}
  },
  computed: mapState(['localBot']),
  mounted: function () {
  },
  components: {
    BotController
  },
  methods: {}
}
</script>
