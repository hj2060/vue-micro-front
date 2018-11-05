import 'vendor/register'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false
import appsConfig from './apps'
import appRouter from './appRouter'
const $app = new appRouter(appsConfig)
Vue.prototype.$app = $app
Vue.use(ElementUI)
const Bus = new Vue
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#home')
