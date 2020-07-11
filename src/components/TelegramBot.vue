<template>
  <div>
    <p :key="index" v-for="(value, name, index) in localBot.bot">
      <b>{{name}}: </b>{{value}}<br/>
    </p>
  </div>
</template>

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

  }
}
</script>
