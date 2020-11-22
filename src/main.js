import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from '@/router/index.js'
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(VueRouter)
Vue.use(Vant)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
