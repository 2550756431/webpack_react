import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Detail from '../views/Detail.vue'
import Table_is_attri from '../views/Table_is_attri.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      keepAlive: true,
      title: 'Home'
    }
  },
  {
    path: '/detail',
    name: 'Detail',
    component: Detail,
    meta: {
      keepAlive: true,
      title: 'Detail'
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      keepAlive: true,
      title: 'Home'
    }
  },
  {
    path: '/Table_is_attri',
    name: 'Table_is_attri',
    component: Table_is_attri,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
