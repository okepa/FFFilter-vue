import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home.vue'
import Fanfictions from '@/components/Fanfiction/Fanfiction.vue'
import Fics from '@/components/Fics/Fics.vue'
import Crossovers from '@/components/Crossovers/Crossovers.vue'
import CrossoverFics from '@/components/CrossoverFics/CrossoverFics.vue'
import Favorites from '@/components/Favorites/Favorites.vue'
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
      path: '/fics',
      name: 'Fics',
      component: Fics
    },
    {
      path: '/crossovers',
      name: 'Crossovers',
      component: Crossovers
    },
    {
      path: '/crossoverfics',
      name: 'CrossoverFics',
      component: CrossoverFics
    },
    {
      path: '/favorites',
      name: 'Favorites',
      component: Favorites
    }
  ]
})
