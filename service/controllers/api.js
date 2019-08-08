const products = require('../mock/products')
const users = require('../mock/users')
const APIError = require('../middleware/rest').APIError

module.exports = {
  'POST /api/login': async (ctx, next) => {
    const token = users.login(ctx.request.body.username, ctx.request.body.password)
    if (token) {
      ctx.rest(token)
    } else {
      throw new APIError('login:not_found_user', 'account password is wrong.')
    }
  },
  'GET /api/products': async (ctx, next) => {
    ctx.rest({
      products: products.getProducts()
    })
  },
  'POST /api/products': async (ctx, next) => {
    let p = products.createProduct(ctx.request.body.name, ctx.request.body.manufacturer, parseFloat(ctx.request.body.price))
    ctx.rest(p)
  },
  'DELETE /api/products/:id': async (ctx, next) => {
    let p = products.deleteProduct(ctx.params.id)
    if (p) {
      ctx.rest(p)
    } else {
      throw new APIError('product:not_found', 'product not found by id.')
    }
  }
}