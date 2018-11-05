// 公共模块
import App from './App.vue'
import {Vue, inject} from 'vendor'
import router from './router'
import store from './store'
Vue.config.productionTip = false
const app = Vue.extend({
  router,
  store,
  render: h => h(App)
})
inject('app2', app)