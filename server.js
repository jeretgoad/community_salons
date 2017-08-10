process.env.NODE_ENV = process.env.NODE_ENV || 'development';
process.env.PORT = process.env.PORT || 8080;

var mongoose = require('./config/mongoose');  //this line has to be in front of all other middleware functions
var express = require('./config/express');

var db = mongoose();
var app = express();

app.listen(process.env.PORT);
module.exports = app;

console.log('\nServer running at port ' + process.env.PORT + '\n');