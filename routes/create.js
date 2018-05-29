var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;




/* GET create page. */
router.get('/', function (req, res, next) {
    res.render('create', {
       
    });

});






module.exports = router;
