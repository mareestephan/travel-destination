var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('destination', {
        title: 'avos',
        name: 'piesang'
    });

});

module.exports = router;