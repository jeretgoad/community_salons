var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AdvertisementSchema = new Schema({
  name: {
    type: String,
    default: 'ads name'
  },
  index: {
    type: Number,
    unique: true
  },
  img: {
    type: String,
    default: '/'
  },
  link: {
    type: String,
    default: "https://www.communitysalonhome.com/"
  }
});

mongoose.model('Advertisement', AdvertisementSchema);