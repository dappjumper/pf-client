<template>
  <div class="fullscreen" :class="{ state: true }">
    <Spinner :active="state == 'loading'"/>
    <div class="form supercenter">
      <q-form
            @submit="onSubmit"
            @reset="onReset"
            class="q-gutter-md"
          >
            <q-input
              filled
              v-model="apikey_input"
              label="API key *"
              hint="Your telegram bot API key"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Please type something']"
            />

            <q-toggle v-model="accept" label="Allow this service to use your key for additional functionality" />

            <div>
              <q-btn label="Submit" type="submit" color="primary"/>
              <q-btn label="Back" type="reset" color="primary" flat class="q-ml-sm" />
            </div>
          </q-form>
    </div>
  </div>
</template>

<style scoped>
  .fullscreen {
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background: #ECE9E6;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to bottom right, #FFFFFF, #ECE9E6);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to bottom right, #FFFFFF, #ECE9E6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    transition-delay:0.5s;
  }
  .fullscreen.loading {
    background:#333333;
    color:#fafafa;
  }
  .supercenter  {
    max-width:600px;
    width:600px;
    margin:0 auto;
    position:absolute;
    top:50%;
    left:50%;
    margin-left:-300px;
    transform:translate(0,-50%);
  }
</style>

<script>

import Spinner from './Spinner'
import { mapActions } from 'vuex'

export default {
  name: 'BotController',
  props: ['serviceDomain'],
  components: {
    Spinner: Spinner
  },
  data: () => {
    return {
      state: 'loading',
      apikey_input: '',
      accept: false
    }
  },
  computed: {},
  mounted: function () {
    const activeKey = this.$store.state.localBot.apikey
    this.accept = this.$store.state.localBot.allowInternal
    if (!activeKey) {
      this.state = 'initial'
    } else {
      this.state = 'loading'
      this.fetchInitialBotData(activeKey)
    }
  },
  methods: {
    ...mapActions('localBot', [
      'externalQuery'
    ]),
    fetchInitialBotData: function (injectedApikey) {
      this.externalQuery({
        method: 'getMe',
        apikey: injectedApikey || this.apikey_input
      })
        .then((result) => {
          console.log('Resultaing', result)
          this.state = 'initial'
        })
        .catch((error) => {
          this.$q.notify({
            type: 'negative',
            message: 'API key did not work',
            position: 'bottom-right'
          })
          console.log(error)
          this.state = 'initial'
        })
    },
    onSubmit: function () {
      // TODO
      this.state = 'loading'
      this.fetchInitialBotData()
    },
    onReset: function () {
      this.apikey_input = ''
      this.$router.push('/')
    }
  }
}
</script>
