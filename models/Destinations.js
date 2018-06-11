var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DestinationsSchema = new Schema({
    destination_name: String,
    meta_description: String,
    write_up_header: String,
    write_up: String,
    longitude: Number,
    latitude: Number,
    uploaded_file: String


});

module.exports = mongoose.model('Destinations', DestinationsSchema);