import Vue from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'
import './registerServiceWorker'

import axios from 'axios'
import VueSwal from 'vue-swal'

Vue.prototype.$api = axios.create({
  baseURL: 'http://labrador-api.uhmtoto.space/'
})
Vue.use(VueSwal)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
