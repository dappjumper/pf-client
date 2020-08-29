<template>
   <transition name="pageTransition">
  <q-page>
      <component v-if="primed" :user="user" :is="componentName"/>
      <div v-if="!primed">
        Loading your awesome {{ page }} content...
      </div>
  </q-page>
  </transition>
</template>

<style>
  .pageTransition-enter-active, .pageTransition-leave-active {
    transition: all .1s;
    margin-left:0rem;
  }
  .pageTransition-enter, .pageTransition-leave-to /* .fade-leave-active below version 2.1.8 */ {
    position:absolute;
    width:100%;
    top:32px;
    left:32px;
    opacity: 0;
    margin-left:3rem;
  }
  .q-page {
  }
</style>

<style scoped>
  h1 {
    font-size:3rem;
    line-height:3rem;
    margin:0;
    padding:0;
    text-transform: capitalize;
  }
</style>

<script>

import * as DashboardPages from './pages'
import { mapGetters } from 'vuex'

export default {
  name: 'DashboardPage',
  props: ['page'],
  components: {
    ...DashboardPages
  },
  data: () => {
    return {
      primed: false
    }
  },
  watch: {},
  computed: {
    ...mapGetters('localBot', [
      'getSavedData'
    ]),
    user () {
      return this.getSavedData('botGetMe')
    },
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
    this.readyCheck()
  },
  methods: {
    readyCheck () {
      if (!this.primed) {
        if (!this.user) {
          setTimeout(this.readyCheck, 100)
        } else {
          this.primed = true
        }
      }
    },
    getProperComponentName () {
      return 'DashboardIndex'
    }
  },
  filters: {}
}
</script>
