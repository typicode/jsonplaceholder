var server = require('json-server')
var data = require('./data.json')

// TODO make sure data can't be changed

// Get port
var port = process.env.PORT || 3000 

// Start server
server(data).listen(port, function() {
  console.log('JSONPlaceholder listening on http://localhost:' + port)
})
