<template>
  <div class="home">
    <welcome></welcome> <!-- welcome bar -->
    <div class="container"> 
      <div class="row">
       <main class="col-12" role="main">
        <section class="slide">
          <div class="slideshow-container">
            <img alt="test" v-bind:src="notebookIcon"/>
            <img alt="slide" v-bind:src="slideImages[currentNumber]" 
              style="max-width: 40%; height: auto;"
              v-on:mouseover="stopRotation"
              v-on:mouseout="startRotation"
            />
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
            <a class ="icon-box" href= "https://github.com/peterhyun1234/Vue_study" target="_blank"><i class="fa fa-linkedin fa-2x"></i></a>
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
      currentNumber: 0
    }
  },
  methods: {
    startRotation: function() {
      this.timer = setInterval(this.next, 1000);
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
  .home {
    background-color: #f2f2f2;
    width: 100%;
    margin-right: auto;
    margin-left: auto;
  }
  .row {
    background-color: #f2f2f2;
    flex-wrap: wrap;
    margin-right: +10%;
    margin-left: +10%;
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