import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home.vue'
import Fanfictions from '@/components/Fanfiction/Fanfiction.vue'
import Fics from '@/components/Fics/Fics.vue'
import Crossovers from '@/components/Crossovers/Crossovers.vue'
import CrossoverFics from '@/components/CrossoverFics/CrossoverFics.vue'
import Favorites from '@/components/Favorites/Favorites.vue'
import AuthenticationService from '@/services/AuthenticationService'
import Login from '@/components/Login/Login.vue'
import { EventBus } from '../main';

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/home'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter: checkLoginStatus
  },
  {
    path: '/logout',
    name: 'Logout',
    beforeEnter(to, from, next) {
      checkLoginStatus(to, from, next)
      AuthenticationService.logout()
      next('/home')
    }
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    beforeEnter: checkLoginStatus
  },
  {
    path: '/fanfiction',
    name: 'Fanfiction',
    component: Fanfictions,
    beforeEnter: checkLoginStatus
  },
  {
    path: '/fics',
    name: 'Fics',
    component: Fics,
    beforeEnter: checkLoginStatus
  },
  {
    path: '/crossovers',
    name: 'Crossovers',
    component: Crossovers,
    beforeEnter: checkLoginStatus
  },
  {
    path: '/crossoverfics',
    name: 'CrossoverFics',
    component: CrossoverFics,
    beforeEnter: checkLoginStatus
  },
  {
    path: '/favorites',
    name: 'Favorites',
    component: Favorites,
    beforeEnter: requireAuth
  }
  ]
})

function requireAuth(to, from, next) {
  checkLoginStatus(to, from, next)
  if (!AuthenticationService.loggedIn()) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
}

function checkLoginStatus(to, from, next){
  EventBus.$emit('loginStatus');
  next()
}
