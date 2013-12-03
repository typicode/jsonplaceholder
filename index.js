var server = require('json-server'),
	  seed = require('./seed.js');

var db = seed.run();

server.run(db, { readOnly: true });