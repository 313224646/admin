import localforage from '../plugins/localforage'
import axios from '../plugins/axios'


export default {
  getToken (username, password, cb) {
    axios.post('/api/login', {
      username: this.form.username,
      password: this.form.password
    }).then(
      res => {
        localforage.setItem('token', res)
        console.log(res)
      }
    )
  }
}