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
    path: '/Columnas',
    name: 'Columnas',    
    component: () => import(/* webpackChunkName: "Columnas" */ '../views/Columnas.vue')
  },
  {
    path: '/Cards',
    name: 'Cards',    
    component: () => import(/* webpackChunkName: "Columnas" */ '../views/Cards.vue')
  },
  {
    path: '/Formulario',
    name: 'Formulario',    
    component: () => import(/* webpackChunkName: "Form" */ '../views/Formulario.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
