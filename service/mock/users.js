const jwt = require('jsonwebtoken')

let id = 0
function nextId() {
  id++
  return 'p' + id
}

function User (username, password) {
  this.id = nextId()
  this.username = username
  this.password = password
}

let users = [
  new User('admin', 'admin')
]

module.exports = {
  login: (username, password) => {
    let result = users.find(item => {
      return item.username === username && item.password === password
    })
    if (result) {
      return jwt.sign({
        username: result.username,
        id: result.id
      }, 'user_token', { expiresIn: '2h' })
    } else {
      return null
    }
  }
}