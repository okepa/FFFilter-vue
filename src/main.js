// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Navmenu from './components/Navmenu/Navmenu'
import VeeValidate from 'vee-validate';

import('../node_modules/vuetify/dist/vuetify.min.css')

Vue.use(VeeValidate);
Vue.config.productionTip = false
Vue.component('navmenu', Navmenu)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
