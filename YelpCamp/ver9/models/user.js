var mongoose = require('mongoose'),
    passportLocalMongoose = require('passport-local-mongoose');

var UserSchema = new mongoose.Schema({
    username: String,
    password: String
});

// add a bunch of useful methods to our schema
UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);