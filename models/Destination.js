var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DestinationSchema = new Schema({
    title: String,
    write_up: String,
    lat_long: String
});



module.exports = mongoose.model('Destination', DestinationSchema);