'use strict'

var Salon = require('mongoose').model('Salon');

//create new salons and save them into the database
exports.create = function(req, res, next) {
  var salon = new Salon(req.body);
  
  salon.save(function(err) {
    if (err) {
      return next(err);
    } else {
      res.json(salon);
    }
  });
};

//get a list of all salons
exports.list = function(req, res, next) {
  Salon.find({}, function(err, salons) {
    if (err) {
      return next(err);
    } else {
      res.json(salons);
    }
  });
};

//get a salon by id
exports.read = function(req, res) {
  res.json(req.salon);
};

exports.salonById = function(req, res, next, id) {
  Salon.findOne({
    _id: id
  }, function(err, salon) {
    if (err) {
      return next(err);
    } else {
      req.salon = salon;
      next();
    }
  });
};

//update a salon info
exports.update = function(req, res, next) {
  Salon.findByIdAndUpdate(req.salon.id, req.body, function(err, salon) {
    if (err) {
      return next(err);
    } else {
      res.json(salon);
    }
  });
};

//delete an existing salon
exports.delete = function(req, res, next) {
  req.salon.remove(function(err) {
    if (err) {
      return next(err);
    } else {
      res.json(req.salon);
    }
  });
};