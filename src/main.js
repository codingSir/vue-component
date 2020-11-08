import Vue from 'vue'
import App from './App.vue'
import lodash from 'lodash'
import store from '@/store'
import router from '@/router'
import element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

import ls from 'vue-ls'
const options = {
    namespace: 'vuejs__', // key键前缀
    name: 'ls', // 命名Vue变量.[ls]或this.[$ls],
    storage: 'local', // 存储名称: session, local, memory
};

Vue.use(ls, options);

Vue.config.productionTip = false;
console.log(process.env)
console.log(process.env.ALL_PARTIES)

Vue.use(element)

store.dispatch('global/setAllParties',process.env.ALL_PARTIES);

import './router/router.intercept'

global._ = lodash
new Vue({
    router,
    store,
  render: h => h(App)
}).$mount('#app')
