<template>
  <div id="Home">
    <div class="header">
      <Header />
    </div>
    <div class="container">
      <div class="sampleUI">
        <logo />
        <h1 class="title">
          second_nuxt
        </h1>
        <h2 class="subtitle">
          My dazzling Nuxt.js project
        </h2>
        <div class="links">
          <a
            href="https://nuxtjs.org/"
            target="_blank"
            class="button--green"
          >
            Documentation
          </a>
          <a
            href="https://github.com/nuxt/nuxt.js"
            target="_blank"
            class="button--grey"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Header from '~/components/Header.vue'

export default {
  components: {
    Logo,
    Header
  }
}
</script>

<style>
#Home {
  display: flex;
  flex-direction: column;
  text-align: center;
}

.sampleUI{
  margin: 80px 0px 0px;
}

.container {
  margin: 0 auto;
  min-height: 100vh;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
