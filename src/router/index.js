import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import FormMovie from '../components/FormMovie.vue'
import Login from '../components/Login.vue'
import Registro from '../components/Registro.vue'
import Forgot from '../components/Forgot.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/',
    name: 'login',
    component: Login
  },{
    path: '/registro',
    name:'registro',
    component: Registro
  },
  {
    path: '/formMovie',
    name: 'formmovie',
    component:FormMovie
  },
  {
    path: '/forgot',
    name: 'forgot',
    component: Forgot
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
