<template>
  <div id="Home">
    <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css" rel="stylesheet">
    <div class="header">
      <Header />
    </div>
    <div class="container">
        <div class="sampleUI">
            <v-app id="myGraph">
                <div class="text-center">            
                    <v-btn class="mx-2" rounded dark large color="cyan" v-on:click="startGraph">
                        <v-icon dark>mdi-clock-start</v-icon>START
                    </v-btn>
                
                    <v-btn class="mx-2" rounded dark large color="red" v-on:click="endGraph">
                        <v-icon dark>mdi-clock-end</v-icon>END
                    </v-btn>
                </div>
                <v-sparkline
                    :fill="fill"
                    :gradient="gradient"
                    :line-width="width"
                    :padding="padding"
                    :smooth="radius || false"
                    :value="value"
                    auto-draw
                ></v-sparkline>
            </v-app>
        </div>
    </div>
  </div>
</template>

<script>
const gradients = [
  ['#222'],
  ['#42b3f4'],
  ['red', 'orange', 'yellow'],
  ['purple', 'violet'],
  ['#00c6ff', '#F0F', '#FF0'],
  ['#f72047', '#ffd200', '#1feaea'],
]

import Header from '~/components/Header.vue'

export default {
  components: {
    Header
  },
  data() {
    return {
        fill: true,
        gradient: gradients[4],
        gradients,
        padding: 8,
        radius: 10,
        value: [0,1,2,3,4,5,6,7,8,9,10],
        width: 2,
        currentNumber: 0
    }
  },  
  methods: {
    startGraph: function() {
      //this.timer = setInterval(this.next, 1000);
    },

    endGraph: function() {
      //clearTimeout(this.timer);
      //this.timer = null;
    },

    next: function() {
    //   if(this.currentNumber == 14)
    //     this.currentNumber = 0
    //   else{
    //     this.currentNumber += 1 
    //   }
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
  font-family: "Roboto";
}

.container {
  margin: 0 auto;
  min-height: 100vh;
}

</style>
