<template>
  <div id="Home">
    <div class="header">
      <Header />
    </div>
    <div class="container">
      <div class="sampleUI">
        <div class="graphControl" style="color:white; font-size: 30px; margin: 0px 0px 50px;">
          <button class="simpleButton" v-on:click="connect" style="background-color:blue; margin: 0px 20px 0px;">Connect</button>
          <button class="simpleButton" v-on:click="disconnect" style="background-color:red; margin: 0px 20px 0px;">Disconnect</button>
          <button class="simpleButton" v-on:click="Start" style="background-color:green; margin: 0px 20px 0px;">Start</button>
        </div>
        <div class="graphContainer" style="">
          <span class="graph">sdsdsd</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Header from '~/components/Header.vue'

export default {
  components: {
    Header
  },
  data() {
    return {
      currentNumber: 0
    }
  },  
  methods: {
    connect: function() {
      this.$connect();
    },   
    
    disconnect: function() {
      this.$disconnect();
    },

    start: function() {
        // $socket is [WebSocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket) instance
        this.$socket.send('start');
        // or with {format: 'json'} enabled
        //this.$socket.sendObj({awesome: 'data'})
    },

    next: function() {

    }
  },
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
  font-size: 50px;
}

.container {
  margin: 0 auto;
  min-height: 100vh;
}

.simpleButton {
  border-radius:10px;
  box-shadow: 2px 2px 2px 2px gray;
  padding: 5px;
}

.log {
  margin: 0px 20px 0px;
  width: 30%;
  border-radius:10px;
  box-shadow: 2px 2px 2px 2px gray;
  padding: 5px;
}

.graph {
  margin: 0px 20px 0px;
  width: 90%;
  border-radius:10px;
  box-shadow: 1px 1px 1px 1px gray;
  padding: 30px 20px 20px;
}
</style>
