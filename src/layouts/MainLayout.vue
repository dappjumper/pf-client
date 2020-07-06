<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
        <q-toolbar-title>
          Project Finch
        </q-toolbar-title>
        <router-link to="/">Back</router-link>
        <div>rf v0.0.1</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          <TelegramBotSidebar></TelegramBotSidebar>
        </q-item-label>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style scoped>

  .q-toolbar a {
    text-decoration: none;
    padding-right:16px;
    color:#fafafa;
  }

</style>

<script>

import TelegramBotSidebar from './../components/TelegramBotSidebar'

export default {
  name: 'MainLayout',
  components: {
    TelegramBotSidebar
  },
  data () {
    return {
      leftDrawerOpen: false,
      botData: {
        platform: null
      }
    }
  },
  methods: {
    useBot: function () {
      console.log('Should we?')
    }
  }
}
</script>
