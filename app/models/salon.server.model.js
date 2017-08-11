var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/* categories define types of the salon, could be multiple
   coordiantes define latitude and longitude [lat, long] 
   hours define operation hours [mon, tue, wed, thu, fri, sat, sun] */
var SalonSchema = new Schema({
  name: {
    type: String,
    default: 'salonname',
  },
  categories: {
    type: Array,
    default: ['barber']
  },
  address: {
    type: String,
    default: 'no address added'
  },
  county: {
    type: String,
    default: 'no county specified'
  },
  coordinates: {
    type: Array,
    default: [0, 0]
  },
  distance: {
    type: number,
    default: 0
  },
  duration: {
    type: number,
    default: 0
  },
  phone: {
    type: String,
    default: '(888)-888-8888'
  },
  owner: {
    type: String,
    default: 'no owner specified'
  },
  hours: {
    type: Array,
    default: ['']
  },
  index: {
    type: Number,
    unique: true
  },
  ownerImg: {
    type: String,
    default: '/'
  },
  img: {
    type: Array,
    default: ['/']
  },
  link: {
    type: String,
    default: "https://www.communitysalonhome.com/"
  }
});

mongoose.model('Salon', SalonSchema);