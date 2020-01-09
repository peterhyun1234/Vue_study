<template>
  <div class="welcome">
    <p style="position: static; z-index: 3;">  
        저희 사이트를 방문해주셔서 감사합니다! 저는 <a href= "https://portal.ajou.ac.kr/" target="_blank" rel="noopener">아주대학교</a> 재학중인 전현빈입니다.<br>
        이 사이트는 <a href= "https://www.opencarelab.com/" target="_blank" rel="noopener">Opencarelab</a> 에서 
        <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue.js</a>를 스터디하면서 실습용으로 개발했습니다!<br>
        전체적인 UI는 <a href="https://flutter.dev/" target="_blank" rel="noopener">Flutter 개발 사이트</a>를 참조했습니다.<br>
        소스코드: <a href="https://github.com/peterhyun1234/Vue_study" target="_blank" rel="noopener">/peterhyun1234/Vue_study</a>
    </p>
    <p class= "welcome-left-icon">
        <img alt="test-left" src="../assets/welcome-left.png" style="max-width: 85%; height: auto;"/>
    </p>
    <p class= "welcome-right-icon">
        <img alt="test-right" src="../assets/welcome-right.png" style="max-width: 85%; height: auto;"/>
    </p>
  </div>
</template>

<script>
export default {
  name: 'welcome'
}
</script>

<style scoped>
    div { 
        font-family: "Google Sans", "Roboto", sans-serif;
        color: white; 
        background-color: #318f65 ; 
        font-size: 18px; 
        margin: 0;  
        padding: 10px 30px 5px;
    } 
    a {
        color: #4fe8a4;
        text-decoration: none;
    }
    .welcome-left-icon {
        margin: 0;
        position: absolute;
        top: 0;
        z-index: 1;
    }
    .welcome-right-icon {
        margin: 0;
        text-align: right;
        position: absolute;
        top: 0;
        right: 0;
        z-index: 2;
    }
</style>
