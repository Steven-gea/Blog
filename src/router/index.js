import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Language from '../views/Language.vue'
import Type from '../views/Type.vue'
import Brand from '../views/Brand.vue'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/Language',
    component: Language
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/Type',
    component: Type
  },
  {
    path: '/Brand',
    component: Brand
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
