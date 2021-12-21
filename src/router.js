import Vue from 'vue'
import Router from 'vue-router'
import Passengers from './views/passengers.vue'
import PassengerDetail from './views/passenger-detail.vue'

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
      path: '/passengers/:id',
      name: 'passenger-detail',
      component: PassengerDetail,
     props: true
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
