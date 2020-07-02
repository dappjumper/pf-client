<template>
  <q-form action="https://some-url.com" method="post" @submit="onSubmit">
    <q-input name="firstname" ...>
  </q-form>
</template>

<script>
export default {
  name: 'APIKeyEntry',
  props: {},
  methods: {
    onSubmit (evt) {
      console.log('@submit - do something here', evt)
      evt.target.submit()
    }
  }
}
</script>
