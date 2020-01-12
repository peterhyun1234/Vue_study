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
                        href: '/introductionVideo',
                        title: '소개 영상',
                        icon: 'fa fa-video-camera'
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
                    },
                    {
                        href: '/vueBootstrap',
                        title: 'Vue-Bootstrap 기초',
                        icon: 'fa fa-bars',
                        child: [
                            {
                                href: '/vueBootstrap1',
                                title: 'Sub Link1'
                            },
                            {
                                href: '/vueBootstrap2',
                                title: 'Sub Link2'
                            }
                        ]
                    },
                    {
                        href: '/vuetify',
                        title: 'Vuetify 기초',
                        icon: 'fa fa-bars',
                        child: [
                            {
                                href: '/vuetify1',
                                title: 'Sub Link1'
                            },
                            {
                                href: '/vuetify2',
                                title: 'Sub Link2'
                            }
                        ]
                    },
                    {
                        href: '/vueNuxt',
                        title: 'Vue-Nuxt 기초',
                        icon: 'fa fa-bars',
                        child: [
                            {
                                href: '/vueNuxt1',
                                title: 'Sub Link1'
                            },
                            {
                                href: '/vueNuxt2',
                                title: 'Sub Link2'
                            }
                        ]
                    },
                    {
                        href: '/AndSoOn',
                        title: '기타 정보',
                        icon: 'fa fa-handshake-o'
                    },
                    
                ]
            }
        }
    }
</script>

<style>
#app {
  font-family: "Google Sans", "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
