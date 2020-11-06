import vuex from 'vuex'
import Vue from "vue";
import global from "@/store/global";

Vue.use(vuex);

export default new vuex.Store({
  modules:{
      global
  }
})