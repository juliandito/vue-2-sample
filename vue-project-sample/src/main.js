import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routes'

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  // mode: 'history'
})

router.beforeEach((to, from, next) => {
  console.log('before each')
  next()
})

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
