<template>
  <div>
    <div v-if="allowInternally">
      You're good
    </div>
    <div v-if="!allowInternally">
      Please allow this service to use your API key
    </div>
    <AllowInternalToggle />
  </div>
</template>

<script>

import AllowInternalToggle from './../AllowInternalToggle'

export default {
  name: 'DashboardPage',
  props: ['page'],
  components: {
    AllowInternalToggle
  },
  data: () => {
    return {
      allowInternally: false
    }
  },
  watch: {
    '$store.state.localBot.allowInternal' (value) {
      this.allowInternally = value
    }
  },
  computed: {
    apikey () {
      return this.$store.state.localBot.apikey
    }
  },
  mounted: function () {
    this.allowInternally = JSON.parse(this.$store.state.localBot.allowInternal)
  },
  methods: {},
  filters: {}
}
</script>
