var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

var Destinations = require('../models/Destinations');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', {title: "Sustainable Travel"});

// });

router.get('/', function (req, res, next) {

  Destinations.find({}, function (err, destinations) {
    if (err) throw err;

    let data = {
      title: 'Sustainable Travel',
      destinations: destinations
    }

    res.render('../views/', data);


  });


});

module.exports = router;
