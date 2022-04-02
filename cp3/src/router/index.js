import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FireView from '../views/FireView.vue'
import WaterView from '../views/WaterView.vue'
import GrassView from '../views/GrassView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/fire',
    name: 'Fire',
    component: FireView,

  },
  {
    path: '/water',
    name: 'Water',
    component: WaterView,
  },
  {
    path: '/grass',
    name: 'Grass',
    component: GrassView,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
