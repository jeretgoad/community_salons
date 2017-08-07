'use strict'

var Worker = require('mongoose').model('Worker');

//create new workers and save them into the database
exports.create = function(req, res, next) {
  var worker = new User(req.body);
  
  worker.save(function(err) {
    if (err) {
      return next(err);
    } else {
      res.json(worker);
    }
  });
};

//get a list of all workers
exports.list = function(req, res, next) {
  Worker.find({}, function(err, workers) {
    if (err) {
      return next(err);
    } else {
      res.json(workers);
    }
  });
};

//get a single worker by id
exports.read = function(req, res) {
  res.json(req.worker);
};

exports.workerById = function(req, res, next, id) {
  Worker.findOne({
    _id: id
  }, function(err, user) {
    if (err) {
      return next(err);
    } else {
      req.worker = worker;
      next();
    }
  });
};

//update a worker info
exports.update = function(req, res, next) {
  Worker.findByIdAndUpdate(req.worker.id, req,body, function(err, worker) {
    if (err) {
      return next(err);
    } else {
      res.json(worker);
    }
  });
};

//delete an existing worker
exports.delete = function(req, res, next) {
  req.worker.remove(function(err) {
    if (err) {
      return next(err);
    } else {
      res.json(req.worker);
    }
  });
};