'use strict'

var Advertisement = require('mongoose').model('Advertisement');

//create new ads and save them to database
exports.create = function(req, res, next) {
  var advertisement = new Advertisement(req.body);
  
  advertisement.save(function(err) {
    if (err) {
      return res.status(400).send({
        message: getErrorMessage(err)
      });
    } else {
      res.json(advertisement);
    }
  });
};

//get all advertisements
exports.list = function(req, res, next) {
  Advertisement.find({}, function(err, ads) {
    if (err) {
      return res.status(400).send({
        message: getErrorMessage(err)
      });
    } else {
      res.json(ads);
    }
  });
};

//get ads by id
exports.read = function(req, res) {
  res.json(req.ads);
};

exports.adsById = function(req, res, next, id) {
  Advertisement.findOne({
    _id: id
  }, function(err, ads) {
    if (err) {
      return next(err);
    } else {
      req.ads = ads;
      next();
    }
  });
};

//update ads
exports.update = function(req, res, next) {
  Advertisement.findByIdAndUpdate(req.ads.id, req.body, function(err, ads) {
    if (err) {
      return res.status(400).send({
        message: getErrorMessage(err)
      });
    } else {
      res.json(ads);
    }
  });
};

//delete existing ads
exports.delete = function(req, res, next) {
  req.ads.remove(function(err) {
    if (err) {
      return res.status(400).send({
        message: getErrorMessage(err)
      });
    } else {
      res.json(req.ads);
    }
  });
};

//error handling
var getErrorMessage = function(err) {
  if (err.errors) {
    for (var errName in err.errors) {
      if (err.errors[errName].message) return err.errors[errName].message;
    }
  } else {
    return 'Unkown server error';
  }
};