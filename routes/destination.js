var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
var Users = require('../models/Users');

mongoose.connect('mongodb://stephan-travel:jk7890-jk7890@ds137600.mlab.com:37600/travel-destination');

// /* GET home page. */
router.get('/', function (req, res, next) {
    res.render('destination', {
       
    });

});

  

module.exports = router;
