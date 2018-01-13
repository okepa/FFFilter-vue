import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home.vue'
import Fanfictions from '@/components/Fanfiction/Fanfiction.vue'
import Crossovers from '@/components/Crossovers/Crossovers.vue'
import Vuetify from 'vuetify'

Vue.use(Router)
Vue.use(Vuetify)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/fanfiction',
      name: 'Fanfiction',
      component: Fanfictions
    },
    {
      path: '/crossovers',
      name: 'Crossovers',
      component: Crossovers
    }
  ]
})
