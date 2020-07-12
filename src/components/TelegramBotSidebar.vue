<template>
  <div>
    Some content
  </div>
</template>

<script>

import TelegramBot from './TelegramBot'

export default {
  name: 'TelegramBotSidebar',
  props: ['bot'],
  data: () => {
    return {
      parent: TelegramBot,
      localBot: {},
      endpoint: (window.location.href.indexOf('localhost') > -1 ? 'http://localhost:8000' : 'https://pf-api.dappjump.io')
    }
  },
  mounted: function () {

  },
  methods: {

  }
}
</script>
