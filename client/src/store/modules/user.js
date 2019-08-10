import localforage from '@/plugins/localforage'
import axios from '@/plugins/axios'
import router from '@/router'

const state = {
  user: {
    username: '',
    avatar: '',
    token: ''
  }
}
const mutations = {
  setUser (state, user) {
    state.user = user
  }
}
const actions = {
  getUser ({ commit }, user) { // 登陆
    axios.post('/api/login', {
      username: user.username,
      password: user.password
    }).then(
      res => {
        // 存于本地用于下次访问校验
        localforage.setItem('token', res.token)
        commit('setUser', res)
        router.push('/') // 登陆成功统一跳到管理页
      }
    )
  },
  async verifyUser ({ state }) { // 验证token是否过期
    const token = state.user.token || await localforage.getItem('token')
    try {
      await axios.post('/api/verify', { token })
    } catch (error) {
      router.push('/login') // 过期或者无效统一回到登陆页
    }
  }
}
const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}