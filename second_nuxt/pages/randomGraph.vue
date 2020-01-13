<template>
  <div id="Home">
    <div class="header">
      <Header />
    </div>
    <div class="container">
        <div class="sampleUI">
            This is randomgraph
        </div>
    </div>
  </div>
</template>

<script>

import Header from '~/components/Header.vue'

export default {
  components: {
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

</style>
