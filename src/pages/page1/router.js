import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Test from './views/Test.vue'
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
      path: '/home',
      component:Home
    },
    {
      path: '/test',
      component:Test
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
