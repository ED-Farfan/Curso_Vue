import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',    
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/Servicios',
    name: 'Servicios',    
    component: () => import(/* webpackChunkName: "Servicios" */ '../views/Servicios.vue')
  },
  /*Ruta Dinamica */
  {
    path: '/Galeria/:id',
    name: 'Galeria',
    component: () => import(/* webpackChunkName: "Galeria" */ '../views/Galeria.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
