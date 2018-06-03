var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
var Users = require('../models/Users');


//  ======= this code send info to mlab ======

router.post('/', function (req, res, next) {

  var user = new Users();

  user.full_name = req.body.full_name;
  user.email = req.body.email;

  user.save(function (error) {
    if (error)
      res.send(error);

    res.redirect('/')
  });
});




  // ====== This shows json data on page ======

  //  Users.find({}, function (err, users) {
  //    if (err) throw err;

  //    res.send(users);


  //  });

  // ========== renders the users from MLAB =======

  // router.get('/', function (req, res, next) {

  //     Users.find({}, function (err, users) {
  //         if (err) throw err;

  //         let data = {
  //             title: 'All posts',
  //             users: users
  //         }

  //         res.render('../views/destination', data);


  //     });


  // });





module.exports = router;
