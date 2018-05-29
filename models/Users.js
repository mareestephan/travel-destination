var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UsersSchema = new Schema({
    username: String,
    firstname: String,
    lastname: String,
    email: String,
    password: String
});

module.exports = mongoose.model('Users', UsersSchema);