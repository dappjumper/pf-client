<template>
  <div>
    <UserBadge :user="user" expanded="true" avatar="true"/>
  </div>
</template>

<style scoped>

</style>

<script>

import UserBadge from './../../UserBadge.vue'

export default {
  name: 'AboutIndex',
  data: () => {
    return {}
  },
  props: ['user'],
  components: {
    UserBadge
  },
  mounted: function () {},
  methods: {},
  filters: {}
}
</script>
