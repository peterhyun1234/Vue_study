import Vue from 'vue'
import Router from 'vue-router'
import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'

import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

Vue.use(Router)
Vue.use(VueSidebarMenu)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
