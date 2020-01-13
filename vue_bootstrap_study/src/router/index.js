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
    path: '/showRequest',
    name: 'showRequest',
    component: () => import('../views/showRequest.vue')
  },
  {
    path: '/sendRequest',
    name: 'sendRequest',
    component: () => import('../views/sendRequest.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL, 
  routes
})

export default router
