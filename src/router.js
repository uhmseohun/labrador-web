import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'

import Login from '@/views/Login.vue'

import Place from '@/views/Place.vue'
import Notification from '@/views/Notification.vue'
import Setting from '@/views/Setting.vue'

import Timeline from '@/views/Timeline.vue'
import Device from '@/views/Device.vue'

import AddPlace from '@/views/AddPlace.vue'
import AddDevice from '@/views/AddDevice.vue'

Vue.use(Router)

const requireAuth = (to, from, next) => {
  if (localStorage.accessToken) {
    axios.defaults.headers.common.authorization =
      localStorage.accessToken
    return next()
  }
  next('/auth')
}

const forbidAuth = (to, from, next) => {
  if (localStorage.accessToken) return next('/')
  next()
}

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      beforeEnter: (to, from, next) => {
        if (localStorage.accessToken) next('/timeline')
        else next('/auth')
      }
    },
    {
      path: '/auth',
      name: 'login',
      meta: {
        title: '로그인'
      },
      component: Login,
      beforeEnter: forbidAuth
    },
    {
      path: '/auth/join',
      name: 'join',
      component: () => import(/* webpackChunkName: "join" */ '@/views/Join.vue'),
      beforeEnter: forbidAuth
    },
    {
      path: '/place',
      name: 'place',
      meta: {
        title: '장소 목록'
      },
      component: Place,
      beforeEnter: requireAuth
    },
    {
      path: '/add/place',
      name: 'addPlace',
      meta: {
        title: '장소 추가'
      },
      component: AddPlace,
      beforeEnter: requireAuth
    },
    {
      path: '/notification',
      name: 'notifiaction',
      meta: {
        title: '알림'
      },
      component: Notification,
      beforeEnter: requireAuth
    },
    {
      path: '/timeline',
      name: 'timeline',
      meta: {
        title: '타임라인'
      },
      component: Timeline,
      beforeEnter: requireAuth
    },
    {
      path: '/device',
      name: 'device',
      meta: {
        title: '기기 목록'
      },
      component: Device,
      beforeEnter: requireAuth
    },
    {
      path: '/add/device',
      name: 'addDevice',
      meta: {
        title: '기기 추가'
      },
      component: AddDevice,
      beforeEnter: requireAuth
    },
    {
      path: '/setting',
      name: 'setting',
      meta: {
        title: '설정'
      },
      component: Setting,
      beforeEnter: requireAuth
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = `LABRADOR - ${to.meta.title}`
  }
  next()
})

export default router
