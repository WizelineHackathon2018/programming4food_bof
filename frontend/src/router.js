import Vue from 'vue'
import Router from 'vue-router'
import Firebase from 'firebase'

import Home from './views/Home.vue'
import About from './views/About.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import Dashboard from './views/freelancer/Dashboard.vue'

import Teams from './views/freelancer/teams/Teams.vue'
import TeamCreate from './views/freelancer/teams/TeamCreate.vue'
import Profile from './views/freelancer/Profile.vue'

import SearchFreelancers from './views/freelancer/SearchFreelancers.vue'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/teams',
      meta: { requiresAuth: true },
      component: Teams
    },
    {
      path: '/freelancers',
      meta: { requiresAuth: true },
      component: SearchFreelancers
    },
    { path: '/teams/create', name: 'TeamCreate', component: TeamCreate, meta: { requiresAuth: true }, },
    { path: '/profile', name: 'Profile', component: Profile, meta: { requiresAuth: true }, }
  ]
})

router.beforeEach((to, from, next) => {
  let currentUser = Firebase.auth().currentUser
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if(requiresAuth && !currentUser) next('login');
  //else if(!requiresAuth && currentUser) next('dashboard');
  else next()
})

export default router
