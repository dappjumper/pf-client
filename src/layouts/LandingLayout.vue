<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style>
  @import '../assets/styles/responsive.css';
</style>

<script>

export default {
  name: 'LandingLayout',

  components: {

  },

  data () {
    return {
    }
  }
}
</script>
