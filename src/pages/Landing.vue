<template>
  <q-page>
    <div class="row">
      <div class="container items-center justify-around">
        <div class="col herotext">
          <h1>
            Chatbots made easy
          </h1>
          <h2>
            Just add water
          </h2>
          <router-link to="/app"><q-btn push icon="construction" rounded color="primary" label="Open PF in your browser" class="breaker"></q-btn></router-link>
        </div>
        <div class="col heroillustration">
          <img src="~assets/quasar-logo-full.svg"/>
        </div>
      </div>
    </div>
  </q-page>
</template>

<style scoped>
  .container {
    width:100%;
    display:flex;
    margin:0 auto;
    max-width: 1080px;
  }
  .row {
    background:#fafafa;
    padding-top:200px;
    padding-bottom:200px;
    padding-left:32px;
    padding-right:32px;
  }
  a {
    text-decoration: none;
  }
  .col {

  }
  img {
    margin:0 auto;
    text-align:center;
    width:100%;
  }
  h1 {
    font-size:4em;
    line-height:1em;
    font-weight:500;
    margin-bottom:8px;
  }
  h2 {
    font-size:3em;
    line-height:1em;
    margin-top:8px;
  }
  .breaker {
    margin-bottom:120px;
  }
  @media only screen and (max-width:1140px) {
    .container {
      flex-direction: column;
    }

    .heroillustration {
      position:relative;
      top:-400px;
      z-index:0;
      opacity:0.2;
      overflow:visible;
      height:1px;
      transform:scale(3);
    }

    .herotext {
      position:relative;
      z-index:1;
    }

  }
</style>

<script>

export default {
  name: 'PageLanding',
  components: {

  }
}
</script>
