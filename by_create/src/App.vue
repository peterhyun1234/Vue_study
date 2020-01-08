<template>
  <div id="app">
    <sidebar-menu :menu="menu" />
    <div id="nav">
    </div>
    <router-view/>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                menu: [
                    {
                        header: true,
                        title: 'JHB VUE STUDY',
                        hiddenOnCollapse: true
                    },
                    {
                        href: '/',
                        title: '홈 화면',
                        icon: 'fa fa-home'
                    },
                    {
                        href: '/',
                        title: 'Vue 설치 방법',
                        icon: 'fa fa-download'
                    },
                    {
                        href: '/quickStart',
                        title: 'Vue 빠른 시작',
                        icon: 'fa fa-fast-forward'
                    },
                    {
                        href: '/charts',
                        title: 'Vue 개념 기초',
                        icon: 'fa fa-bars',
                        child: [
                            {
                                href: '/charts/sublink',
                                title: 'Sub Link'
                            }
                        ]
                    }
                ]
            }
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

#nav {
  padding: 30px;
}

#nav a { 
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
