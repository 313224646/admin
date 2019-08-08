const Koa = require('koa')

const app = new Koa()
const bodyParser = require('koa-bodyparser')
const controller = require('./middleware/controller')
const rest = require('./middleware/rest')

// log request URL:
app.use(async (ctx, next) => {
  console.log(`Process ${ctx.request.method} ${ctx.request.url}...`)
  await next()
})

// 跨域请求设置和预检请求
app.use(async (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', '*')
  ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild')
  ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS')
  ctx.set("Access-Control-Max-Age", "3600")
  if (ctx.method == 'OPTIONS') {
    ctx.body = 200
  } else {
    await next()
  }
})

app.use(bodyParser())
app.use(rest.restify())
app.use(controller())

app.listen(3000)
console.log('app started at port 3000...')
