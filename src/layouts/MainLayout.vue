<template>
  <q-layout view="lHh Lpr lFf">
    <q-header v-if="isLoggedIn">
      <q-toolbar>
        <q-toolbar-title>
          Project Finch
        </q-toolbar-title>
        <router-link to="/">Home</router-link>
        <a @click='forget'>Log out</a>
      </q-toolbar>
    </q-header>

    <q-drawer
            v-model="leftDrawerOpen"
            show-if-above
            :width="200"
            :breakpoint="400"
          >
            <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
              <q-list padding>
                <q-item clickable v-ripple>
                  <q-item-section avatar>
                    <q-icon name="question_answer" />
                  </q-item-section>

                  <q-item-section>
                    Chat
                  </q-item-section>
                </q-item>

                <q-item active clickable v-ripple>
                  <q-item-section avatar>
                    <q-icon name="timeline" />
                  </q-item-section>

                  <q-item-section>
                    Statistics
                  </q-item-section>
                </q-item>

                <q-item clickable v-ripple>
                  <q-item-section avatar>
                    <q-icon name="view_module" />
                  </q-item-section>

                  <q-item-section>
                    Modules
                  </q-item-section>
                </q-item>

                <q-item clickable v-ripple>
                  <q-item-section avatar>
                    <q-icon name="settings" />
                  </q-item-section>

                  <q-item-section>
                    Settings
                  </q-item-section>
                </q-item>
                <q-item unclickable class="tobottom">
                  <q-item-section avatar>
                    <q-icon name="help_outline" />
                  </q-item-section>

                  <q-item-section>
                    Version 0.4
                  </q-item-section>
                </q-item>
              </q-list>
            </q-scroll-area>
              <div class="absolute-top bg-transparent" style="padding:16px">
                <q-avatar size="56px" class="q-mb-sm">
                  <img :src="avatarProfile">
                </q-avatar>
                <div class="text-weight-bold">{{ $store.state.localBot.data.first_name }}</div>
                <div>@{{ $store.state.localBot.data.username }}</div>
              </div>

          </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style>
  .tobottom {
    position:fixed;
    bottom:0;
  }
  .fullscreen {
    border-top-left-radius:8px!important;
  }
  body {
    background: #373B44;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to top left, #4286f4, #373B44);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to top left, #4286f4, #373B44); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
  .q-drawer, .q-header {
    background:none!important;
    color:#fafafa;
  }
  .q-item.q-router-link--active, .q-item--active {
    color:white;
  }
  .q-item--active {
    background:rgba(255,255,255,0.3);
  }
</style>

<style scoped>
  .q-drawer .q-scrollarea {
    border:none!important;
  }

  .q-toolbar {
    height:76px;
  }

  .q-toolbar a {
    text-decoration: none;
    padding-right:16px;
    color:#fafafa;
    cursor: pointer;
  }

</style>

<script>

import { mapActions } from 'vuex'

export default {
  name: 'MainLayout',
  components: {

  },
  data () {
    return {
      drawerState: true,
      loggedIn: false,
      botData: {
        platform: null
      },
      avatarBackground: 'data:image/jpeg;base64,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',
      avatarProfile: 'https://static.bangkokpost.com/media/content/20200715/c1_1951912.jpg'
    }
  },
  computed: {
    leftDrawerOpen () {
      if (!this.$store.state.localBot.isLoggedIn) return false
      return this.drawerState
    },
    isLoggedIn () {
      return (this.$store.state.localBot.isLoggedIn)
    }
  },
  methods: {
    ...mapActions('localBot', [
      'logOut'
    ]),
    forget () {
      this.logOut()
      window.location.reload()
    }
  }
}
</script>
