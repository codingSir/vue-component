/**
 * 接口拦截器
 */
import Vue from 'vue';
import axios from 'axios'; // 推荐接口请求

// axios请求拦截器;
axios.interceptors.request.use(
  config => {
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

// axios响应拦截器
axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);

export default axios
