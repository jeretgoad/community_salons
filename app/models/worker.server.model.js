var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var WorkerSchema = new Schema({
  name: {
    type: String,
    unique: true,
    default: 'Not Specified'
  },
  phoneNumber: {
    type: String,
    default: '(888)-888-8888'
  },
  title: {
    type: String,
    default: 'worker'
  },
  bio: {
    type: String,
    default: 'Not filled'
  },
  img: {
    type: String,
    default: '/'
  }
});

mongoose.model('Worker', WorkerSchema);