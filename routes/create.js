var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('create', {
        title: 'Pere',
        name: 'piesang'
    });

});

router.post("/", function (req, res) {
    // console.log(req.body.title);
    var country = {
        title: req.body.title,
        write_up: req.body.write_up,
        lat_long: req.body.lat_long
    };

    // var data = new Destination(country);
    // data.save();
  
});



module.exports = router;
