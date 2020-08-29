<template>
  <q-page>
    <BotController :rooted="$emit('rooted')"></BotController>
  </q-page>
</template>

<style scoped>
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
