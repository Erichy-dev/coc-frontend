import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/ministries',
      name: 'ministries',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Ministries.vue')
    },
    {
      path: '/sermons',
      name: 'sermons',
      component: () => import('../views/Sermons.vue')
    },
    {
      path: '/events',
      name: 'events',
      component: () => import('../views/Events.vue')
    },
    {
      path: '/resources',
      name: 'resources',
      component: () => import('../views/Resources.vue')
    },
    {
      path: '/support',
      name: 'support',
      component: () => import('../views/Support.vue')
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: () => import ('../views/Welcome.vue')
    },
    {
      path: '/give',
      name: 'give',
      component: () => import ('../views/Give.vue')
    }
  ]
})

export default router
