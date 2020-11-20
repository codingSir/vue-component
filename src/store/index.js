import vuex from 'vuex'
import Vue from "vue";
import global from "@/store/global";
import * as types from './mutations.type'

Vue.use(vuex);

const store = new vuex.Store({
  modules:{
      global
  },
  state:{
     progress:''
  },
  mutations:{
    ['uploadProgressMutations'](state,value){
      state.progress = value
    }
  }
})

const initStore = function (){

    // setTimeout(() => {store.commit(types.SET_COM_ID, window.sessionStorage.getItem('comId'))},120)
}
initStore();
export default store;