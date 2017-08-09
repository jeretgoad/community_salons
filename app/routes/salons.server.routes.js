var salons = require('../../app/controllers/salons.server.controller');

module.exports = function(app) {
  app.route('/salons')
    .post(salons.create)
    .get(salons.list);
  
  app.route('/salons/:salonId')
    .get(salons.read)
    .put(salons.update)
    .delete(salons.delete);
  
  app.param('salonId', salons.salonById);
};