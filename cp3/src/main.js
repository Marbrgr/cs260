import Vue from 'vue'
import App from './App.vue'
import router from './router'
import pokemon from './Pokemon.js'


Vue.config.productionTip = false

let data = {
  monList: pokemon
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')