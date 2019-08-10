const jwt = require('jsonwebtoken')
const imageToBase64 = require('../tool/imageToBase64')
const APIError = require('../middleware/rest').APIError

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
  'POST /api/login': async (ctx, next) => {
    const username = ctx.request.body.username
    const password = ctx.request.body.password
    let result = users.find(item => {
      return item.username === username && item.password === password
    })
    if (result) {
      let token = jwt.sign({
        username: result.username,
        id: result.id
      }, 'user_token', { expiresIn: '2h' })
      let avatar = imageToBase64(result.avatarPath)
      ctx.rest({
        username: result.username,
        token,
        avatar
      })
    } else {
      throw new APIError('login:not_found_user', 'account password is wrong.')
    }
  },
  'POST /api/verify': async (ctx, next) => {
    const token = ctx.request.body.token
    if (!token) {
      throw new APIError('verify:not_found_token', 'missing parameter token.')
    }
    try {
      ctx.rest(jwt.verify(token, 'user_token'))
    } catch (error) {
      throw new APIError('verify:verify_token', 'token expired.')
    }
  }
}