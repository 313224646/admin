import Vue from 'vue'
import axios from 'axios'

axios.defaults.baseURL = 'http://192.168.0.110:3000' // 全局设置请求前缀

Vue.prototype.$http = axios

// 统一请求拦截器
axios.interceptors.request.use(function (config) {
  // notInterceptors：不拦截请求
  // Demo：
  // axios.get(`url...`, {
  //   data: {
  //     notInterceptors: true
  //   }
  // }
  if (config.data && config.data.notInterceptors) {
    return
  } else {
    // 全局loding设置
  }
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 全局响应拦截器
axios.interceptors.response.use(function (res) {
  return(res.data)
}, function (err) {
  return Promise.reject(err)
})

export default axios
