// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Navmenu from './components/Navmenu/Navmenu.vue'
import VeeValidate from 'vee-validate';
import Vuetify from 'vuetify'
//import '../css/style.css'
//import './vuetify.min.css'
//import('../css/styles.css')
import('../node_modules/vuetify/dist/vuetify.min.css')

Vue.config.productionTip = false
Vue.component('navmenu', Navmenu)
Vue.use(Vuetify);
Vue.use(VeeValidate);
router.replace('/home');

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
