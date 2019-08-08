import Vue from 'vue'
import axios from 'axios'
import { Message } from 'element-ui'

axios.defaults.baseURL = 'http://192.168.0.110:3000' // 全局设置请求前缀

Vue.prototype.$http = axios // 设置别名

// 统一请求拦截器
axios.interceptors.request.use(
  config => {
    return config
  }, 
  err => {
    return Promise.reject(err)
  }
)

// 全局响应拦截器
axios.interceptors.response.use(
  res => {
    return(res.data)
  }, 
  err => {
    const response = err.response.data
    // 消息提醒响应错误信息
    Message({
      message: response.message,
      type: 'error'
    })
    return Promise.reject(err)
  }
)

export default axios
