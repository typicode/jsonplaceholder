var server = require('json-server'),
	  seed = require('./seed.js');

var db = seed.run();

server.run(db, { mode: 'read-only' });