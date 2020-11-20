import axios from './httpInterceptor'
import store from "@/store";

const post = (url, params = null, config = {}) => {
  return axios({
    method: 'post',
    url: url,
    data: params,
    headers: config
  }).then((res) => {
    return res.data
  }).catch(error => {
    return error
  })
}

const get = (url, params = null, config = {}) => {
  return axios({
    method: 'get',
    url: url,
    params: params,
    headers: config
  }).then(res => {
    return res.data
  }).catch(error => {
    return error
  })
}

const uploadFile = (url, params = null, config = {}) => {
  return axios({
    method: 'post',
    url: url,
    data: params,
    headers: config,
    onUploadProgress: progressEvent => {
      let a = parseInt((progressEvent.loaded * 100) / progressEvent.total);
      if (a > 100) a = 100;
      store.commit('uploadProgressMutations', a);
    },
  }).then((res) => {
    return res.data
  }).catch(error => {
    return error
  })
}

export default {
  install(Vue) {
    Vue.prototype.$post = post;
    Vue.prototype.$get = post;
    Vue.prototype.$uploadFile = uploadFile;
  }
}