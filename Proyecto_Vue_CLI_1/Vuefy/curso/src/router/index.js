import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/Grid',
    name: 'Grid',    
    component: () => import(/* webpackChunkName: "Grid" */ '../views/Grid.vue')
  },
  {
    path: '/Botones',
    name: 'Botones',    
    component: () => import(/* webpackChunkName: "Botones" */ '../views/Botones.vue')
  },
  {
    path: '/Cards',
    name: 'Cards',    
    component: () => import(/* webpackChunkName: "Cards" */ '../views/Cards.vue')
  },
  {
    path: '/Tareas-crud',
    name: 'tareas-crud',    
    component: () => import(/* webpackChunkName: "Cards" */ '../views/Tares.vue')
  }

]

const router = new VueRouter({
  routes
})

export default router
