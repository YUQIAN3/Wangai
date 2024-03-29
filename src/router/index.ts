import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Money from '@/views/Money.vue';
import Labels  from '@/views/Labels.vue';
import Statistics  from '@/views/Statistics.vue';
import NotFound  from '@/views/NotFound.vue';
Vue.use(VueRouter)


const routes: Array<RouteConfig> = [
    {
        path: '/',
       redirect:'./money'
    },
    {
    path: '/money',
    component: Money
   },
    {
        path: '/labels',
        component: Labels
    },
    {
        path: '/statistics',
        component:Statistics
    },
    {
        path: '*',
        component:NotFound
    },
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
