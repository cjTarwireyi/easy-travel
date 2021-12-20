import Vue from 'vue'
import Router from 'vue-router'
import Passengers from './views/passengers.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect:'/passengers'
    },
    {
      path: '/passengers',
      name: 'passengers',
      component: Passengers
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/about.vue')
    }
  ]
})
