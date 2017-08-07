'use strict'

exports.render = function(req, res) {
  if (req.session.lastVisit) {
    console.log(req.session.lastVisit);
  }
  
  req.session.lastVisit = new Date();
  
  res.render('home', {
    slogan: "It's more then hair!",
    title: 'Community Salon'
  })
};