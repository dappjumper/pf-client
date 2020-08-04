<template>
  <q-toggle unselectable v-on:input="allowInternalChanged" :value="allowInternally" label="Allow this service to use your key for additional functionality" />
</template>

<style scoped>

</style>

<script>

export default {
  name: 'AllowInternalToggle',
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
  mounted: function () {
    this.allowInternally = JSON.parse(this.$store.state.localBot.allowInternal)
  },
  methods: {
    allowInternalChanged (value) {
      this.$store.commit('localBot/setAllowInternal', value)
    }
  },
  filters: {}
}
</script>
