<template>
  <div :key="state" :class="{'absolute-top': !expanded}" class="bg-transparent" :style="!expanded ? 'padding:16px' : ''">
    <div v-if="state == 'loading'">
      Loading...
    </div>
    <div v-if="state !== 'loading'">
      <q-avatar v-if="avatar" :style="expanded ? 'float: right; margin-left:3rem;' : ''" :size="expanded ? '300px' : '56px'" class="q-mb-sm">
        <TelegramProfilePicture :user="user"/>
      </q-avatar>
      <div v-if="!expanded" class="text-weight-bold">{{ user.first_name }}</div>
      <div v-if="!expanded">@{{ user.username }}</div>
      <div v-if="expanded">
        <p :key="key" v-for="(value, key) in user">
          <q-toggle
                  v-if="typeof value == 'boolean'"
                  :value="value"
                  disable
                  :label="key | pretty"
                />
          <q-input v-if="typeof value == 'string' || typeof value == 'number'" disable filled :value="value" :label="key | pretty" />
        </p>
        <p>Please contact <a href="https://t.me/botfather" target="_blank">@botfather</a> to change these values</p>
      <q-btn @click="confirmLogout = true;" color="red">Log out</q-btn>
      <q-dialog v-model="confirmLogout">
            <q-card>
              <q-card-section class="row items-center">
                <span class="q-ml-sm">Are you sure you wish to log out?</span>
              </q-card-section>

              <q-card-actions align="right">
                <q-btn flat label="Cancel" color="primary" v-close-popup />
                <q-btn label="Log out" color="red" @click="forget()" />
              </q-card-actions>
            </q-card>
          </q-dialog>
      </div>
    </div>
  </div>
</template>

<style>
  .q-field--disabled .q-field__control > div {
    opacity:1!important;
  }
  .q-field--disabled .q-field__inner {
    cursor:default!important;
  }
</style>

<script>
import { mapActions } from 'vuex'
import TelegramProfilePicture from './TelegramProfilePicture'

export default {
  name: 'UserBadge',
  props: ['user', 'avatar', 'expanded'],
  components: {
    TelegramProfilePicture
  },
  data: () => {
    return {
      state: 'loading',
      confirmLogout: false
    }
  },
  watch: {
    user: {
      immediate: true,
      handler (data) {
        this.state = 'loading'
        if (data.id) {
          this.user = data
          this.state = 'ready'
        }
      }
    }
  },
  filters: {
    pretty (v) {
      let pretty = v
      pretty = pretty.replace(/_/g, ' ')
      return pretty
    }
  },
  mounted: function () {},
  methods: {
    ...mapActions('localBot', [
      'externalQuery',
      'logOut'
    ]),
    forget () {
      this.logOut()
      window.location.reload()
    }
  }
}
</script>
