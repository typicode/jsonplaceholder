var server = require('json-server')

var port = process.env.PORT || 3000 

function reset() {
  server.low.load(__dirname + '/data.json')
}

server.low.autoSave = false
server.low.on('change', reset)

server.listen(port, function() {
  console.log('JSONPlaceholder listening on http://localhost:' + port)
  reset()
})
