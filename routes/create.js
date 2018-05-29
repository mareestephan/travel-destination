var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;




/* GET create page. */
router.get('/', function (req, res, next) {
    res.render('create', {
       
    });

});


router.post('/newsletters', function (req, res) {


    var newsletter = new Newsletters();
    newsletter.title = req.body.title;
    newsletter.author = req.body.author;
    newsletter.content = req.body.content;

    newsletter.save(function (error) {
        if (error)
            res.send(error);

        res.redirect('/newsletters');
    });




});




module.exports = router;
