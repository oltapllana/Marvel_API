import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue'
import marvelcharacter from '../components/marvel-character.vue'
import Comics from '../views/comicsTab.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
 
  {
    path: '/marvel-character/:id',
    name: 'marvel-character',
    component: marvelcharacter
  },
  {
    path: '/comics',
    name: 'comics',
    component: Comics
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
