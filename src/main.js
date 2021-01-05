// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Navmenu from './components/Navmenu/Navmenu.vue'
import LoginStatus from './components/Login/LoginStatus.vue'
import VeeValidate from 'vee-validate'
import Vuetify from 'vuetify'
import VueScrollTo from 'vue-scrollto'
import VueCookie from 'vue-cookie'
import '../node_modules/vuetify/dist/vuetify.min.css'
export const EventBus = new Vue();

Vue.config.productionTip = false
Vue.component('navmenu', Navmenu)
Vue.component('loginstatus', LoginStatus)
Vue.use(Vuetify, {
  theme: {
    primary: '#1a237e',
    secondary: '#303f9f',
    accent: '#283593' 
  }
})
Vue.use(VeeValidate)
Vue.use(VueScrollTo)
Vue.use(VueCookie)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
