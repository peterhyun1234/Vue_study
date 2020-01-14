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
          <button class="simpleButton" v-on:click="start" style="background-color:green; margin: 0px 20px 0px;">Start</button>
        </div>
        <div class="graphContainer" style="">
          <div class="graph">
            <div>
              <p style="font-size: 30px;">
                recvnum: {{recvnum}}
              </p>
            </div>
          </div>
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
      recvnum: 0,
      currentNumber: 0
    }
  },  
  methods: {
    connect: function() {
      this.$connect();
      this.$options.sockets.onmessage = (data) => (this.recvnum = data.data);
      //this.$options.sockets.onmessage = (data) => this.messageReceived(data); //웹소켓 리스너
    },  
    messageReceived:function(recv_data){
      this.recvdata = recv_data;
    },
    
    disconnect: function() {
      //delete this.$options.sockets.onmessage;
      this.$disconnect();
    },

    start: function() {
      var sendData = "start"
      // $socket is [WebSocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket) instance
      this.$socket.send(sendData);
      //JSON.stringify(data)
      // or with {format: 'json'} enabled
      //this.$socket.sendObj({awesome: 'start'})
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
