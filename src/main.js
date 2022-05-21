import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from 'Router'
import VueRouter from 'vue-router'
Vue.config.productionTip = false
Vue.use(VueRouter)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

new Vue({
  render: h => h(App),
}).$mount('#app')
Vue.use(VueAxios, axios)