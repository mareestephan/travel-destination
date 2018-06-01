var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DestinationsSchema = new Schema({
    destination_name: String,
    meta_description: String

});

module.exports = mongoose.model('Destinations', DestinationsSchema);