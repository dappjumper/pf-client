<template>
  <div>
    <p :key="index" v-for="(value, name, index) in localBot.bot">
      <b>{{name | readableProperty }}: </b>{{value | readableType}}<br/>
    </p>
  </div>
</template>

<style scoped>
  b {
    text-transform: capitalize;
  }
</style>

<script>

export default {
  name: 'TelegramBot',
  props: ['bot'],
  data: () => {
    return {
      localBot: {},
      endpoint: (window.location.href.indexOf('localhost') > -1 ? 'http://localhost:8000' : 'https://pf-api.dappjump.io')
    }
  },
  mounted: function () {
    this.localBot = this.bot
  },
  methods: {

  },
  filters: {
    readableProperty: (value) => {
      return value.replace(/_/g, ' ')
    },
    readableType: (value) => {
      let returnvalue = value
      switch (value) {
        case true:
          returnvalue = 'yes'
          break
        case false:
          returnvalue = 'no'
          break
      }
      return returnvalue
    }
  }
}
</script>
