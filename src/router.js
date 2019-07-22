import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'

import Login from '@/views/Login.vue'
import Place from '@/views/Place.vue'
import Notification from '@/views/Notification.vue'
import Setting from '@/views/Setting.vue'

import AddPlace from '@/views/AddPlace.vue'

import Timeline from '@/views/Timeline.vue'
import Device from '@/views/Device.vue'

Vue.use(Router)

const requireAuth = (to, from, next) => {
  if (localStorage.accessToken) {
    axios.defaults.headers.common.authorization =
      localStorage.accessToken
    return next()
  }
  next('/auth')
}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/auth',
      name: 'login',
      component: Login
    },
    {
      path: '/place',
      name: 'place',
      component: Place,
      beforeEnter: requireAuth
    },
    {
      path: '/add/place',
      name: 'addPlace',
      component: AddPlace,
      beforeEnter: requireAuth
    },
    {
      path: '/notification',
      name: 'notifiaction',
      component: Notification,
      beforeEnter: requireAuth
    },
    {
      path: '/timeline',
      name: 'timeline',
      component: Timeline,
      beforeEnter: requireAuth
    },
    {
      path: '/device',
      name: 'device',
      component: Device,
      beforeEnter: requireAuth
    },
    {
      path: '/setting',
      name: 'setting',
      component: Setting,
      beforeEnter: requireAuth
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
