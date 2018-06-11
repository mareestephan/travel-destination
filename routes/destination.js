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


// ========= populates destination with information from MLAB =======



// router.get('/', function (req, res, next) {

//     Destinations.find({}, function (err, destinations) {
//         if (err) throw err;

//         let data = {
//             title: 'All posts',
//             destinations: destinations
//         }

//         res.render('../views/destination', data);


//     });


// });

//===========findById === =========

router.get('/:id', function (req, res, next){

    let id = req.params.id;

    Destinations.findById(id, function (err, destinations) {
        if (err) {
            res.send(err);
        } else {

                    let data = {
                        title: 'All posts',
                        destinations: destinations
                    }

                    res.render('../views/destination', data);

        }
    });

});






//========post to mlab DB =========
router.post('/', function (req, res, next) {

    var destination = new Destinations();

    destination.destination_name = req.body.destination_name;
    destination.meta_description = req.body.meta_description;
    destination.write_up_header = req.body.write_up_header;
    destination.write_up = req.body.write_up;
    destination.longitude = req.body.longitude;
    destination.latitude = req.body.latitude;
    destination.uploaded_file = req.files.uploaded_file.name;

    destination.save(function (error) {
        if (error)
            res.send(error);

        
    });
     if (req.files) {

         let uploaded_image = req.files.uploaded_file;

         uploaded_image.mv('./public/images/' + uploaded_image.name, function (err) {

             if (err)
                 return res.status(500).send(err);

            //  res.send('uploaded');
             console.log('file uploaded bra');
             res.redirect('/')
         });

     } else {
         res.send('files not present')

     }
});


  

module.exports = router;


// when click on anchor. send id 
//retrieve id (findById)
//populate with ID.req.pram

