import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './../views/Home.vue'
import Faq from './../views/Faq.vue'
import LogIn from './../views/LogIn.vue'
import SignUp from './../views/SignUp.vue'

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
    path: '/login',
    name: 'login',
    component: LogIn
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUp
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
