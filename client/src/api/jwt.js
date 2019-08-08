import localforage from '../plugins/localforage'
import axios from '../plugins/axios'


export default {
  async getToken (cb) {
    let token = await localforage.getItem('token')
    if (token) {
      return token
    } else {
      // axios.post('/api/login', {
      //   username: this.form.username,
      //   password: this.form.password
      // }).then(
      //   res => {
      //     console.log(res)
      //   }
      // )
    }
  }
}