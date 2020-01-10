<template>
  <div class="home">
    <welcome></welcome> <!-- welcome bar -->
    <div class="container"> 
      <div class="row">
       <main class="col-12" role="main">
        <section class="slide" v-on:dblclick="stopRotation" v-on:click="startRotation">
          <div class ="slide-container">
              <transition name="slide-fade">
                <div class="slide1" v-if="currentNumber === 0">
                  <img alt="slide1" v-bind:src="slideImages[currentNumber]" 
                    style="max-width: 40%; height: auto;"
                  />
                </div>
              </transition>

              <transition name="slide-fade">
                <div class="slide2" v-if="currentNumber === 1">
                  <img alt="slide2" v-bind:src="slideImages[currentNumber]" 
                    style="max-width: 40%; height: auto;"
                  />
                </div>
              </transition>

              <transition name="slide-fade">
                <div class="slide3" v-if="currentNumber === 2">
                  <img alt="slide3" v-bind:src="slideImages[currentNumber]" 
                    style="max-width: 40%; height: auto;"
                  />
                </div>
              </transition>
          </div>
          <div class="slide-text" v-if="currentNumber === 0"><p>Design beautiful web/apps</p></div>
          <div class="slide-text" v-if="currentNumber === 1"><p>Productively build web/apps</p></div>
          <div class="slide-text" v-if="currentNumber === 2"><p>Create faster web/apps</p></div>
          <div class= "notebook-icon">
            <img alt="notebook-icon" v-bind:src="notebookIcon" style="max-width: 90%; height: auto;"/>
          </div>
        </section>
        <section class= "content1">
          <div class ="box">
            <p>content1</p>
            <p>content1</p>
            <p>content1</p>
            <p>content1</p>
            <p>content1</p>
            <p>content1</p>
            <p>content1</p>
          </div>
        </section>
        <section class= "content2">
          <div class ="box">
            <p>content2</p>
          </div>
        </section>
        <section class= "content3">
          <div class ="box">
            <p>content3</p>
          </div>
        </section>
       </main>
      </div> 
    </div>
    <div class="site-footer">
        <div class ="footer-logo">
          <img alt="logo" src="../assets/logo.png" style="max-width: 50%; height: auto;"/>
        </div>   
        <div class ="footer-content">
          <div class ="footer-icon">
            <a class ="opencarelab-icon" href= "https://www.opencarelab.com/" target="_blank" rel="noopener">Opencarelab</a>
            <a class ="icon-box" href= "https://github.com/peterhyun1234/Vue_study" target="_blank"><i class="fa fa-github fa-2x"></i></a>
            <a class ="icon-box" href= "https://github.com/peterhyun1234/Vue_study" target="_blank"><i class="fa fa-twitter fa-2x"></i></a>
            <a class ="icon-box" href= "https://www.linkedin.com/in/hyunbin-jeon-196a2b19b/" target="_blank"><i class="fa fa-linkedin fa-2x"></i></a>
          </div> 
          <div class ="footer-license">
            <p>
              Released under the MIT License<br>
              Copyright © 2020-2025 Peter Jeon
            </p>
          </div> 
        </div>
    </div>
  </div>
</template>

<script>
import welcome from '@/components/welcome.vue'

export default {
  name: 'home',
  data() {
    return {
      notebookIcon: "https://imgur.com/ijYPMMw.png",
      slideImages: ["https://imgur.com/LlUdWIf.jpg", "https://imgur.com/IAlDDXT.jpg", "https://imgur.com/1bqiGwG.jpg"],
      currentNumber: 0,
      show: true
    }
  },
  methods: {
    startRotation: function() {
      this.timer = setInterval(this.next, 2000);
    },

    stopRotation: function() {
      clearTimeout(this.timer);
      this.timer = null;
    },

    next: function() {
      if(this.currentNumber == 2)
        this.currentNumber = 0
      else{
        this.currentNumber += 1 
      }
    }
  },
  components: {
    welcome
  }
}
</script>

<style>
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }
  .home {
    background-color: #f7f7f7;
    width: 100%;
    margin-right: auto;
    margin-left: auto;
  }
  .row {
    background-color: #f7f7f7;
    flex-wrap: wrap;
    margin-right: +10%;
    margin-left: +10%;
  }
  .notebook-icon {
    position: relative;
    padding: 35px 30px 15px;
    top: 0;
    z-index: 2; 
  }
  .slide-text {
    position: absolute;
    font-family: "Google Sans", "Roboto", sans-serif;
    font-size: 80px;
    padding: 35px 30px 15px;
    top: 130px;
    left: 285px;
    z-index: 3; 
  }
  .slide1 {
    position: absolute;
    height: 40%;
    top: 170px;
    left: 0px;
    z-index: 1;
  }
  .slide2 {
    position: absolute;
    height: 40%;
    top: 170px;
    left: 250px;
    z-index: 1;
  }
  .slide3 {
    position: absolute;
    height: 40%;
    top: 170px;
    right: 0;
    z-index: 1;
  }

  .box {
      font-family: "Google Sans", "Roboto", sans-serif;
      color: black; 
      background-color: white; 
      font-size: 22px; 
      margin: 30px 0px;  
      padding: 10px 30px 5px;
      border: 1px solid #d9d9d9;
      border-radius: 1%;
  }
  .site-footer {
    font-family: "Google Sans", "Roboto", sans-serif; 
    float: left;
    background-color: #2e2e2e;
    color: white;
    width: 100%;
    margin-right: auto;
    margin-left: auto;
  }
  .footer-content {
    float: right;
    height: 100%;
    margin-right: 40px;
  }
  .footer-icon {
    padding: 30px 10px 10px;
  }
  .footer-license {
    text-align:right;
  }
  .footer-logo {
    float: right;
    margin-right: -40px;
    margin-left: -40px;
    padding: 20px 10px 10px;
  }
  .opencarelab-icon {
    color:white; 
    padding: 7px; 
    text-decoration: none; 
    font-family: Fantasy; 
    font-size: 25px;
  }
  .icon-box {
    color:white; 
    padding: 7px;
  }

</style>