//database schema for workers of the service
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var WorkerSchema = new Schema({
  name: {
    type: String,
    unique: true
  },
  phoneNumber: String,
  title: String,
  bio: String,
  img: String,
  created: {
    type: Date,
    default: Date.now
  }
});

mongoose.model('Worker', WorkerSchema);