var fs     = require('fs')
var server = require('json-server')

var port = 3000 || process.env.PORT

function reset() {
  var data = JSON.parse(fs.readFileSync('data.json', 'utf-8'))
  server.low.db = data
}

server.low.on('update', reset)
server.low.on('remove', reset)
server.low.on('add', reset)

server.listen(port, function() {
  console.log('JSONPlaceholder listening on http://localhost:' + port)
  reset()
})
