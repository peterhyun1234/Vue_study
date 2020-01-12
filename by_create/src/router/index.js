import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/introductionVideo',
    name: 'introductionVideo',
    component: () => import('../views/introductionVideo.vue')
  },
  {
    path: '/installation',
    name: 'installation',
    component: () => import('../views/installation.vue')
  },
  {
    path: '/quickStart',
    name: 'quickStart',
    component: () => import('../views/quickStart.vue')
  },
  {
    path: '/basicConcept',
    name: 'basicConcept',
    component: () => import('../views/basicConcept.vue')
  },
  {
    path: '/basicConcept_sub1',
    name: 'basicConcept_sub1',
    component: () => import('../views/basicConcept/basicConcept_sub1.vue')
  },
  {
    path: '/basicConcept_sub2',
    name: 'basicConcept_sub2',
    component: () => import('../views/basicConcept/basicConcept_sub2.vue')
  },
  {
    path: '/vueBootstrap',
    name: 'vueBootstrap',
    component: () => import('../views/vueBootstrap.vue')
  },
  {
    path: '/vuetify',
    name: 'vuetify',
    component: () => import('../views/vuetify.vue')
  },
  {
    path: '/vueNuxt',
    name: 'vueNuxt',
    component: () => import('../views/vueNuxt.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL, 
  routes
})

export default router
