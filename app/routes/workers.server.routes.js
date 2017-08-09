var workers = require('../../app/controllers/workers.server.controller');

module.exports = function(app) {
  app.route('/workers')
    .post(workers.create)
    .get(workers.list);
  
  app.route('/workers/:workerId')
    .get(workers.read)
    .put(workers.update)
    .delete(workers.delete);
  
  app.param('workerId', workers.workerById);
};