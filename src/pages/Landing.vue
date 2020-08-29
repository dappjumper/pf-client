<template>
  <q-page>
    <div :class="{primed: primed}" class="row hero">
      <div class="container items-center justify-around">
        <div class="col herotext front">
          <h1>
            Chatbots made easy
          </h1>
          <h2>
            Just add water
          </h2>
          <router-link to="/app"><q-btn push icon="thumb_up_alt" style="display:block; margin:32px auto 16px auto;" rounded color="primary" label="Get started" class="breaker"></q-btn></router-link>
          <router-link to="/app/settings"><q-btn push icon="info" rounded color="secondary" label="Learn more" class="breaker"></q-btn></router-link>
        </div>
        <div class="col heroillustration">
          <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
             viewBox="0 0 540 540" style="enable-background:new 0 0 540 540;" xml:space="preserve">
          <ellipse class="circle middle" cx="269.4" cy="270.9" rx="236.5" ry="236.2"/>
          <ellipse class="circle inner" cx="269.4" cy="270.9" rx="177.9" ry="177.7"/>
          </svg>

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
    background: #373B44;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to top left, #4286f4, #373B44);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to top left, #4286f4, #373B44); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    padding-top:200px;
    padding-bottom:200px;
    padding-left:32px;
    padding-right:32px;
  }
  a {
    text-decoration: none;
  }
  .q-page, .circle ellipse {
    fill:#fafafa;
    background:#fafafa;
  }
  .hero {
    overflow:hidden;
    padding-top:1rem;
    text-align:center;
    color:#333333;
  }
  .hero .front {
    position:relative;
    z-index:1;
    top:250px;
    transform:scale(0,0);
  }
  .hero .front {
    opacity:0;
    transition-delay:.2s!important;
    transition:all 0.5s;
  }
  .heroillustration {
    max-height:350px;
    overflow:visible;
    transform:scale(3,3);
    margin-bottom:-100px;
    position:fixed;
    left:50%;
    margin-left:-300px;
    height:600px;
    width:600px;
    z-index:0;
  }
  .heroillustration .circle {
    opacity:1;
    transform-origin:center center;
    transform:scale(0,0);
    transition: all 1s;
  }
  .circle.outer {
    transition-delay:0s;
  }
  .circle.middle {
    transition-delay:0s;
  }
  .circle.inner {
    transition-delay:0.2s;
  }
  .primed .circle {
    opacity:0.333;
    transform:scale(1,1);
  }
  .primed .front {
    opacity:1!important;
    transform:scale(1,1);
  }
  .primed .circle.inner {
    opacity:1!important;
  }
  .heroillustration .background {
    position:absolute;
    top:0;
    left:0;
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

    .herotext {
      position:relative;
      z-index:1;
    }

  }
  .hero {

  }
</style>

<script>

export default {
  name: 'PageLanding',
  data () {
    return {
      primed: false
    }
  },
  mounted () {
    setTimeout(() => {
      this.primed = true
    }, 1)
  },
  components: {

  }
}
</script>
