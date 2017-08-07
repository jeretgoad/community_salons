'use strict'

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var mongoose = require('./config/mongoose');  //this line has to be in front of all other middleware functions
var express = require('./config/express');

var db = mongoose();
var app = express();

app.listen(3000);
module.exports = app;

console.log('Server running at port 3000');