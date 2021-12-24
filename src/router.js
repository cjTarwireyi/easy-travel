import Vue from 'vue'
import Router from 'vue-router'
import PageNotFound from './views/page-not-found.vue'

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
      component: () => import(/* webpackChunkName: "bundle.passengers" */ './views/passengers.vue'),
    },
    {
      path: '/passengers/:id',
      name: 'passenger-detail',   
      component: () => import(/* webpackChunkName: "bundle.passengers" */ './views/passenger-detail.vue'),
      props: r => ({id: parseInt(r.params.id)})
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "bunle.about" */ './views/about.vue')
    },
    {
      path:'*',
      component: PageNotFound
    }
  ]
})
