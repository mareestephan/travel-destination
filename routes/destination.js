var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
var Users = require('../models/Users');
var Destinations = require('../models/Destinations');

mongoose.connect('mongodb://stephan-travel:jk7890-jk7890@ds137600.mlab.com:37600/travel-destination');

// /* GET home page. */
// router.get('/', function (req, res, next) {
//     res.render('destination', {
       
//     });

// });


router.get('/', function (req, res, next) {

    Users.find({}, function (err, users) {
        if (err) throw err;

        let data = {
            title: 'All posts',
            users: users
        }

        res.render('../views/destination', data);


    });


});

router.post('/', function (req, res, next) {

    var destination = new Destinations();

    destination.destination_name = req.body.destination_name;
    destination.meta_description = req.body.meta_description;

    destination.save(function (error) {
        if (error)
            res.send(error);

        res.redirect('/')
    });
});

  

module.exports = router;


// when click on anchor. send id 
//retrieve id (findById)
//populate with ID.req.pram