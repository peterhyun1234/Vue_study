<template>
  <div id="app">
    <bootheader/>
    <div id="nav">
        <router-view/> <!-- views/에 있는 각 컴포넌트들을 보여주는 역할 -->
    </div>
  </div>
</template>

<script>
import bootheader from './components/header.vue'

export default {
  name: 'app',
  components: {
    bootheader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
