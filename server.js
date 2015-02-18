var express = require('express');
var Mongoose = require('mongoose')
var bodyParser = require('body-parser');

var app = express ();

var port = 9001
var mongoUri = 'mongodb://localhost:27017/benchedSports'

app.use(bodyParser.json());

Mongoose.connect(mongoUri);
Mongoose.connection.once('open', function() {
	console.log('Connected to Server: ' + mongoUri);
});


app.listen(port, function() {
	console.log('Listening to port ' + port);
});