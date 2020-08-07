<template>
  <div>
    <p v-if="!allowKey">Most features are <b>locked</b> without allowing your API key to be used by our service</p>
    <p v-if="allowKey">Thanks for allowing this service to use your API key! Let's grow your audience today!</p>
    <InternalToggle />
  </div>
</template>

<style scoped>

</style>

<script>

import InternalToggle from './../../AllowInternalToggle'

export default {
  name: 'AboutIndex',
  data: () => {
    return {}
  },
  props: ['allowKey'],
  components: {
    InternalToggle
  },
  mounted: function () {},
  methods: {},
  filters: {}
}
</script>
