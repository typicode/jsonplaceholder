const jsonServer = require('json-server')
const clone = require('clone')
const db = process.env.JSON_DB || 'db.json'
const data = require('../data/' + db)

const app = jsonServer.create()
const router = jsonServer.router(clone(data), { _isFake: true })

/*//read-only
app.use((req, res, next) => {
  if (req.path === '/') return next()
  router.db.setState(clone(data))
  next()
})*/

app.use(jsonServer.defaults({
  logger: process.env.NODE_ENV !== 'production'
}))

app.use(router)

module.exports = app
