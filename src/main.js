import Vue from 'vue'
import App from './App.vue'
import lodash from 'lodash'
import store from '@/store'
import router from '@/router'

Vue.config.productionTip = false
console.log(process.env)
console.log(process.env.ALL_PARTIES)

global._ = lodash
new Vue({
    router,
    store,
  render: h => h(App),
  created() {
     store.dispatch('setAllParties',process.env.ALL_PARTIES)
  }
}).$mount('#app')
