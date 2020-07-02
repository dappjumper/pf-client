<template>
  <q-page v-if="state == 'initial'" class="flex flex-center">
    <div class="row">
      <img
        :alt="$t('success')"
        src="~assets/quasar-logo-full.svg"
      >
    </div>
    <div class="row">
      <p>There's nothing here yet... {{msg}}</p>
    </div>
  </q-page>
</template>

<style scoped>
  p {
    color:rgba(0,0,0,0.5);
  }
</style>

<script>

export default {
  name: 'PageIndex',
  data: () => {
    return {
      state: this.getInitialState()
    }
  },
  metods: {
    getInitialState: function () {
      if (JSON.parse(localStorage.getItem('apikeyentry'))) {
        // Has entered an apikey before
        this.state = 'loading'
      } else {
        // Not entered an apikey before
        this.state = 'initial'  
      }
    }
  }
}
</script>
