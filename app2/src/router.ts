import {Vue, VueRouter} from 'vendor'
import Home from './views/Home.vue'
import About from './views/About.vue'
if (process.env.NODE_ENV === 'development') {
  Vue.use((VueRouter as any))
}
export default new VueRouter({
  mode: 'history',
  base: 'app2',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about2',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
      component: About
    }
  ]
})
