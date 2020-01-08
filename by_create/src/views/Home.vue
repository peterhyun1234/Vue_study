<template>
  <div class="home">
    <welcome></welcome> <!-- welcome bar -->
    <div class="container"> 
      <div class="row">
       <main class="col-12" role="main">
        <section class= "slide">
        <div class="slideshow-container">

          <div class="mySlides fade">
            <p>path is {{images[currentNumber]}}</p>
            <!-- <img alt="slide1" v-bind:src="images[currentNumber]" style="max-width: 40%; height: auto;"> -->
          </div>

          <div class="mySlides fade">
            <img alt="slide2" src="../assets/slide2.jpg" style="max-width: 40%; height: auto;">
          </div>

          <div class="mySlides fade">
            <img alt="slide3" src="../assets/slide3.jpg" style="max-width: 40%; height: auto;">
          </div>

        </div>
        </section>
        <section class= "content1">
        <p>section2</p>
        <p>section2</p>
        <p>section2</p>
        <p>section2</p>
                <p>section2</p>
        <p>section2</p>
        <p>section2</p>
        <p>section2</p>
                <p>section2</p>
        <p>section2</p>
        <p>section2</p>
        <p>section2</p>
                <p>section2</p>
        <p>section2</p>
        <p>section2</p>
        <p>section2</p>
                <p>section2</p>
        <p>section2</p>
        <p>section2</p>
        <p>section2</p>
                <p>section2</p>
        <p>section2</p>
        <p>section2</p>
        <p>section2</p>
        </section>
        <section class= "content2">
                <p>section2</p>
        <p>section2</p>
        <p>section2</p>
        <p>section2</p>
                <p>section2</p>
        <p>section2</p>
        <p>section2</p>
        <p>section2</p>
                <p>section2</p>
        <p>section2</p>
        <p>section2</p>
        <p>section2</p>
                <p>section2</p>
        <p>section2</p>
        <p>section2</p>
        <p>section2</p>
                <p>section2</p>
        <p>section2</p>
        <p>section2</p>
        <p>section2</p>
                <p>section2</p>
        <p>section2</p>
        <p>section2</p>
        <p>section2</p>
                <p>section2</p>
        <p>section2</p>
        <p>section2</p>
        <p>section2</p>
        </section>
        <section class= "content3">
        </section>
       </main>
      </div> 
    </div>
    <img alt="logo" src="../assets/test.png">
  </div>
</template>

<script>
import welcome from '@/components/welcome.vue'

export default {
  name: 'home',
  data() {
    return {
      number: 13,
      images: ["../assets/slide1.jpg", "../assets/slide2.jpg", "../assets/slide3.jpg"],
      currentNumber: 0,
      img1: "https://imgur.com/HjgUCHF"
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
    background-color: red;
    flex-wrap: wrap;
    margin-right: +10%;
    margin-left: +10%;
}

</style>