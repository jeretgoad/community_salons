var ads = require('../../app/controllers/advertisements.server.controller');

module.exports = function(app) {
  app.route('/ads')
    .post(ads.create)
    .get(ads.list);
  
  app.route('/ads/:adsId')
    .get(ads.read)
    .put(ads.update)
    .delete(ads.delete);
  
  app.param('adsId', ads.adsById);
};