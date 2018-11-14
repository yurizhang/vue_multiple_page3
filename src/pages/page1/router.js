import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component:Home
    },
    {
      path: '/index',
      beforeEnter() {
        window.location.href = "/"
      }
    },
    {
      path: '/page2',
      beforeEnter() {
        window.location.href = "/page2.html"
      }
    }
  ]
})
