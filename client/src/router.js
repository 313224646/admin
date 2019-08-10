import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: () => import('./views/admin'),
      beforeEnter: (to, from, next) => {
        // 验证是否token是否过期
        store.dispatch('verifyUser').then(
          res => { next() }
        )
      }
    },
    {
      path: '/login',
      component: () => import('./views/login/login')
    }
  ]
})
