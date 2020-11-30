import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './../views/Home.vue'
import Faq from './../views/Faq.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/faq',
    name: 'faq',
    component: Faq
  },
  {
    path: '*',
    component: Home
  }
]

const router = new VueRouter({
  routes
})

export default router
