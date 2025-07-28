const jsonServer = require('json-server')
const clone = require('clone')
const data = require('../data.json')

const app = jsonServer.create()
const router = jsonServer.router(clone(data), { _isFake: true })

// Reset state for each request (except root)
app.use((req, res, next) => {
  if (req.path === '/') return next()
  router.db.setState(clone(data))
  next()
})

// Middleware to normalize userId to integer in POST and PUT
app.use((req, res, next) => {
  if (
    (req.method === 'POST' || req.method === 'PUT') &&
    req.body &&
    typeof req.body.userId === 'string'
  ) {
    const parsed = parseInt(req.body.userId, 10)
    req.body.userId = isNaN(parsed) ? req.body.userId : parsed
  }
  next()
})

// Default middleware (logger, static, CORS, etc)
app.use(jsonServer.defaults({
  logger: process.env.NODE_ENV !== 'production'
}))

// Use JSON Server router
app.use(router)

module.exports = app
