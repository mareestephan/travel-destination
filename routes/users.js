var express = require('express');
var router = express.Router();
var Users = require('../models/Users');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// router.get('/', function(req, res){
// Users.find({})
// });







module.exports = router;
