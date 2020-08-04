<template>
  <div :key="state" class="absolute-top bg-transparent" style="padding:16px">
    <div v-if="state == 'loading'">
      Loading...
    </div>
    <div v-if="state !== 'loading'">
      <q-avatar v-if="avatar" size="56px" class="q-mb-sm">
        <TelegramProfilePicture :user="user"/>
      </q-avatar>
      <div class="text-weight-bold">{{ user.first_name }}</div>
      <div>@{{ user.username }}</div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import TelegramProfilePicture from './TelegramProfilePicture'

export default {
  name: 'UserBadge',
  props: ['user', 'avatar'],
  components: {
    TelegramProfilePicture
  },
  data: () => {
    return {
      state: 'loading'
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
  mounted: function () {},
  methods: {
    ...mapActions('localBot', [
      'externalQuery'
    ])
  }
}
</script>
