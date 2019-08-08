const jwt = require('jsonwebtoken')
const imageToBase64 = require('../tool/imageToBase64')

let id = 0
function nextId() {
  id++
  return 'p' + id
}

function User (username, password, avatarPath) {
  this.id = nextId()
  this.username = username
  this.password = password
  this.avatarPath = avatarPath
}

let users = [
  new User('admin', 'admin', '/assets/avatar/0.jpg')
]

module.exports = {
  login: (username, password) => {
    let result = users.find(item => {
      return item.username === username && item.password === password
    })
    if (result) {
      let token = jwt.sign({
        username: result.username,
        id: result.id
      }, 'user_token', { expiresIn: '2h' })
      let avatar = imageToBase64(result.avatarPath)
      return {
        username: result.username,
        token,
        avatar
      }
    } else {
      return null
    }
  }
}