import { createRouter, createWebHashHistory } from 'vue-router'
import { authGuard } from '@bcwdev/auth0provider-client'

function loadPage(page) {
  return () => import(`./pages/${page}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: loadPage('HomePage')
  },
  {
    path: '/double_up',
    name: 'DoubleUp',
    component: loadPage('CurrentProjectPage')
  },
  {
    path: '/fullstack',
    name: 'FullStack',
    component: loadPage('FullStackPage')
  },
  {
    path: '/previous_games',
    name: 'Games',
    component: loadPage('GamesPage')
  },
  {
    path: '/about',
    name: 'About',
    component: loadPage('AboutPage')
  }
]

export const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash }
    }
    return savedPosition || { top: 0 }
  }
})
