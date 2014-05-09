var server = require('json-server')

var port = 3000 || process.env.PORT

function reset() {
  server.low.load('data.json')
}

server.low.on('update', reset)
server.low.on('remove', reset)
server.low.on('add', reset)

server.listen(port, function() {
  console.log('JSONPlaceholder listening on http://localhost:' + port)
  reset()
})
