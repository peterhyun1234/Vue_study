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
          <div class="slide-text" v-if="currentNumber === 0">
            <p text-shadow: style="text-shadow: 0.5px 0.5px 0.5px gray;">
              <span style="color: white;">Design be</span>
              <span style="color: #42c289;">autiful web/apps</span>
            </p>
          </div>
          <div class="slide-text" v-if="currentNumber === 1">
            <p text-shadow: style="text-shadow: 0.5px 0.5px 0.5px gray;">
            <span style="color: #42c289;">Produ</span>
            <span style="color: white;">ctively buil</span>
            <span style="color: #42c289;">d web/apps</span>
            </p>
          </div>
          <div class="slide-text" v-if="currentNumber === 2">
            <p text-shadow: style="text-shadow: 0.5px 0.5px 0.5px gray;">
              <span style="color: #42c289;">Create faster we</span>
              <span style="color: white;">b/apps</span>
            </p>
          </div>
          <div class= "notebook-icon">
            <img alt="notebook-icon" v-bind:src="notebookIcon" style="max-width: 90%; height: auto;"/>
          </div>
        </section>
        <section class= "content1">
          <div class ="box">
            <div class= "box-contents">
              <p class ="content-text">
                Made By 
                <a class ="opencarelab-icon" href= "https://www.opencarelab.com/" target="_blank" rel="noopener">
                  <span style="color: #2f7ff7">Open</span>
                  <span style="color: #bd1000">care</span>
                  <span style="color: #9904ba">lab</span>
                </a>
              </p>
              <p class ="content-text" style="font-size: 27px; margin-right: +20%; margin-left: +20%;">
                JHB-study is Opencarelab’s UI toolkit for building beautiful, natively compiled applications for 
                  <span style="color: #42c289">mobile</span>
                  , 
                  <span style="color: #42c289">web</span>
                  , and 
                  <span style="color: #42c289">desktop</span> 
                  from a single codebase.
              </p>
              <div class ="content-icon">
                <span class= "GetStarted-button">
                  <router-link to="/installation" style= "color:white; text-decoration: none; font-size: 22px; ">Get started</router-link>
                </span>
                <span class= "WatchVideo-button" style="font-size: 22px; margin-right: +3%; margin-left: +3%;">
                  <a href="/installation" style= "color: #42c289; text-decoration: none; font-size: 22px;">
                    <i class="fa fa-play-circle" aria-hidden="true" style="">  Watch video</i>
                  </a>
                </span>
              </div>
              <p class ="content-text" style="font-size: 18px; ">
                Coming from another platform? Docs: 
                  <span style= "color: #42c289;">
                    iOS, Android, Web, React Native, Xamarin.
                  </span>
              </p>
            </div>
          </div>
        </section>
        <section class= "content2">
          <div class ="box"  style="padding: 60px 0px;">
            <div class ="content-text" style="float: left; width: 31.5%;">
              <div class ="content-icon">
                <i class="fa fa-terminal" aria-hidden="true" style="font-size: 30px; padding:20px; background-color: #d9ffee; color: #42c289; border-radius: 50%; "></i>
              </div>
              <p class ="content-text" style="font-size: 27px; margin: 10px 0px;">
                Fast Development
              </p>
              <p class ="content-text" style="font-size: 17px; margin-right: +10%; margin-left: +10%;">
                Paint your app to life in milliseconds with Stateful Hot Reload. Use a rich set of fully-customizable widgets to build native interfaces in minutes.
              </p>
            </div>
            <div class ="content-text" style="float: left; width: 31.5%;">
              <div class ="content-icon">
                <i class="fa fa-connectdevelop" aria-hidden="true" style="font-size: 30px; padding:20px; background-color: #d9ffee; color: #42c289; border-radius: 50%; "></i>
              </div>
              <p class ="content-text" style="font-size: 27px; margin: 10px 0px;">
                Expressive and Flexible UI
              </p>
              <p class ="content-text" style="font-size: 17px; margin-right: +10%; margin-left: +10%;">
                Quickly ship features with a focus on native end-user experiences. Layered architecture allows for full customization, which results in incredibly fast rendering and expressive and flexible designs.
              </p>
            </div>
            <div class ="content-text" style="float: left; width: 31.5%;">
              <div class ="content-icon">
                <i class="fa fa-object-group" aria-hidden="true" style="font-size: 30px; padding:20px; background-color: #d9ffee; color: #42c289; border-radius: 50%; "></i>
              </div>
              <p class ="content-text" style="font-size: 27px; margin: 10px 0px;">
                Native Performance
              </p>
              <p class ="content-text" style="font-size: 17px; margin-right: +10%; margin-left: +10%;">
                Flutter’s widgets incorporate all critical platform differences such as scrolling, navigation, icons and fonts, and your Flutter code is compiled to native ARM machine code using <span style="color: #42c289">Dart's native compilers</span>. Thus Flutter gives you full native performance on both iOS and Android.
              </p>
            </div>
          </div>
        </section>
        <section class= "content3">
          <div class ="box">
                      <div class ="content-text" style="float: left; width: 40%;">
              <div class ="content-icon">
                <i class="fa fa-terminal" aria-hidden="true" style="font-size: 30px; padding:20px; background-color: #d9ffee; color: #42c289; border-radius: 50%; "></i>
              </div>
              <p class ="content-text" style="font-size: 27px; margin: 10px 0px;">
                Fast Development
              </p>
              <p class ="content-text" style="font-size: 17px; margin-right: +10%; margin-left: +10%;">
                Paint your app to life in milliseconds with Stateful Hot Reload. Use a rich set of fully-customizable widgets to build native interfaces in minutes.
              </p>
            </div>
            <div class ="content-text" style="float: left; width: 55%;">
              <img src="https://firebasestorage.googleapis.com/v0/b/vue-mastery.appspot.com/o/flamelink%2Fmedia%2F1578365059649_0.gif?alt=media&token=cbde36f7-8aff-4ed0-a72f-eae0462814bc"/>
            </div>
          </div>
        </section>
        <section class= "content4">
          <div class ="box">
            ds
          </div>
        </section>
        <section class= "content5">
          <div class ="box">
            <p class ="content-text" style="font-size: 35px; font-weight: 500; padding: 0px 10px 0px; margin-top: 40px; margin-bottom: 0px;">
              Install JHB-study today.
            </p>
            <p class ="content-text" style="font-size: 21px; margin-top: 10px; margin-bottom: 0px;">
              It’s free and open source.
            </p>
            <div class ="content-icon">
              <span class= "GetStarted-button">
                <router-link to="/installation" style= "color:white; text-decoration: none; font-size: 22px; ">Get started</router-link>
              </span>
            </div>
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
            <a class ="opencarelab-icon-footer" href= "https://www.opencarelab.com/" target="_blank" rel="noopener">Opencarelab</a>
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
      this.timer = setInterval(this.next, 3000);
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
      color: #404040; 
      background-color: white; 
      font-size: 22px; 
      margin: 30px 0px;  
      padding: 0px 30px 0px;
      border: 1px solid #d9d9d9;
      border-radius: 1%;
      overflow: hidden;
  }

  .content-text {
    padding: 5px;
  }
  .content-icon {
    padding: 8px;
    margin: 30px;
  }
  .GetStarted-button {
    background-color: #42c289;
    margin-right: +3%; 
    margin-left: +3%; 
    padding: 15px 50px 15px;
  }

  .site-footer {
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
  .opencarelab-icon-footer {
    color:white; 
    padding: 7px; 
    text-decoration: none; 
    font-family: Fantasy; 
    font-size: 25px;
  }
  .opencarelab-icon {
    color: black;
    padding: 2px; 
    text-decoration: none; 
    font-family: Fantasy; 
    font-size: 25px;
  }
  .icon-box {
    color:white; 
    padding: 7px;
  }

</style>