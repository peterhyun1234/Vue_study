<template>
  <div id="app">
    <div id="sidebar">
        <sidebar-menu :menu="menu" />
    </div>
    <div id="nav">
        <router-view/> <!-- views/에 있는 각 컴포넌트들을 보여주는 역할 -->
    </div>
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
                        href: '/installation',
                        title: 'Vue 설치 방법',
                        icon: 'fa fa-download'
                    },
                    {
                        href: '/quickStart',
                        title: 'Vue 빠른 시작',
                        icon: 'fa fa-fast-forward'
                    },
                    {
                        href: '/basicConcept',
                        title: 'Vue 개념 기초',
                        icon: 'fa fa-bars',
                        child: [
                            {
                                href: '/basicConcept_sub1',
                                title: 'Sub Link1'
                            },
                            {
                                href: '/basicConcept_sub2',
                                title: 'Sub Link2'
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

</style>
