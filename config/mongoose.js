var config = require('./config');
var mongoose = require('mongoose');

module.exports = function() {
  var db = mongoose.connect(config.db);
  
  console.log("Registering mongoose");
  
  require('../app/models/worker.server.model');
  console.log('\nworker model registered');
  require('../app/models/salon.server.model');
  console.log('\nsalon model registered');
  require('../app/models/advertisement.server.model');
  console.log('\nadvertisement model registered');
  
  return db;
};