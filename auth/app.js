var bodyParser = require('body-parser'),
    express = require('express'),
    mongoose = require('mongoose'),
    User = require('./models/user'),
    passport = require('passport'),
    LocalStrategy = require('passport-local'),
    passportLocalMongoose = require('passport-local-mongoose');

var app = express();

app.use(require("express-session")({
    // secret can be any string, it is used to en/decode session
    secret: "secret sauce",
    resave: false,
    saveUninitialized: false
}));

// lines needed to setup PassportJS
app.use(passport.initialize());
app.use(passport.session());

// In order to support login sessions, PassportJS will serialize and 
// deserialize user instances to and from the session.
// User.serializeUser and its counterpart are provided from the 
// passport-local-mongoose package, these methods were attached to
// the User object when we used userSchema.plugin(passportLocalMongoose)
// in our 'user.js' file setting up our user database
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.set('view engine', 'ejs');

// ROUTES /////////////////////////////////////////////////////////////////////
app.get('/', function (req, res) {
    'use strict';
    res.render('home');
});

app.get('/secret', function (req, res) {
    'use strict';
    res.render('secret');
});

// end of routes //////////////////////////////////////////////////////////////

app.listen(3000, function () {
    'use strict';
    console.log('...they are not midgets, they are little people!');
});