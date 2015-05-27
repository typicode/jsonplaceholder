var jsonServer = require('json-server')
var clone = require('clone')
var data = require('./data.json')

var port = process.env.PORT || 3000
var expectedApiKey = process.env.APIKEY || null

var app = jsonServer.create()
var router = jsonServer.router(data)

app.use(jsonServer.defaults)

app.all('*', function(req, res, next) {
  var apiKey = req.headers['x-api-key'] || '';
  if (req.method === 'GET' || apiKey === expectedApiKey) {
    next()
  }
  else {
    res.sendStatus(403)
  }
})

app.use(router)

app.listen(port, function() {
  console.log('JSONPlaceholder listening on http://localhost:' + port)
})
