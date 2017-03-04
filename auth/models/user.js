var mongoose = require('mongoose'),
    passportLocalMongoose = require('passport-local-mongoose');

mongoose.connect('mongodb://localhost/auth_demo_app');

var userSchema = mongoose.Schema({
    username: String,
    password: String
});

// adds a number of useful methods
userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);