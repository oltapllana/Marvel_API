import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue'
import SingleNews from '../views/SingleNews.vue'
import marvelcharacter from '../components/marvel-character.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/single-news/:id',
    name: 'single-news',
    component: SingleNews
  },
  {
    path: '/marvel-character/:id',
    name: 'marvel-character',
    component: marvelcharacter
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
