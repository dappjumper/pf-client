<template>
  <div>
    <div v-if="allowInternally">
      <transition name="pageTransition">
        <component v-if="primed" :is="componentName"/>
        <div v-if="!primed">
          Loading your awesome {{ page }} content...
        </div>
      </transition>
    </div>
    <div v-if="!allowInternally">
      <p>Please allow this service to use your API key</p>
      <AllowInternalToggle />
    </div>
  </div>
</template>

<style>
  .pageTransition-enter-active, .pageTransition-leave-active {
    transition: all .1s;
    margin-left:0rem;
  }
  .pageTransition-enter, .pageTransition-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
    margin-left:3rem;
  }
</style>

<script>

import AllowInternalToggle from './../AllowInternalToggle'
import * as DashboardPages from './pages'

export default {
  name: 'DashboardPage',
  props: ['page'],
  components: {
    ...DashboardPages,
    AllowInternalToggle
  },
  data: () => {
    return {
      allowInternally: false,
      primed: false
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
    },
    componentName () {
      const finalPage = this.page.charAt(0).toUpperCase() + this.page.slice(1) + 'Index'
      if (!this.$options.components[finalPage]) return ''
      return finalPage
    }
  },
  mounted: function () {
    this.allowInternally = JSON.parse(this.$store.state.localBot.allowInternal)
    this.primed = true
  },
  methods: {
    getProperComponentName () {
      return 'DashboardIndex'
    }
  },
  filters: {}
}
</script>
