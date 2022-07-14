
import SignUpview from '../views/SignUp_View.vue'


import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import WelcomePage from '../views/WelcomePage.vue'
import HomePage from '../views/HomePage.vue'
import BookingPage from '../views/BookingPage.vue'
import LogIn from '../views/LogInView.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: WelcomePage
  },
  {
    path: '/signup',
    name: 'signup',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')


    component: SignUpview


  },
  {
    path: '/HomePage',
    name: 'HomePage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    component: HomePage

    
  },
  {
    path:'/login',
    name:'login',
    component:LogIn
  },
  {
    path:'/BookingPage',
    name:'BookingPage',
    component:BookingPage,
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
