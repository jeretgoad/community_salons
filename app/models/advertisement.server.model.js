var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AdvertisementSchema = new Schema({
  name: String,
  index: Number,
  img: String,
  link: {
    type: String,
    default: "https://www.communitysalonhome.com/"
  }
});

mongoose.model('Advertisement', AdvertisementSchema);