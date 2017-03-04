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
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// App configurations
app.use(bodyParser.urlencoded({
    extended: true
}));
app.set('view engine', 'ejs');

// Custom middleware used on the /secret route
function isLoggedIn(req, res, next) {
    'use strict';
    if (req.isAuthenticated()) {
        return next();
    } else {
        res.redirect("/login");
    }
}

// ROUTES /////////////////////////////////////////////////////////////////////

app.get('/', function (req, res) {
    'use strict';
    res.render('home');
});

app.get('/secret', isLoggedIn, function (req, res) {
    'use strict';
    res.render('secret');
});

// Auth routes

app.get('/register', function (req, res) {
    'use strict';
    res.render('register');
});

// lesson learned, do NOT pass the inputs from the /register as an
// object into this route (or in the login PUT route either)...
// Authentication named inputs cannot be assembed as an object, ie.,
// <input name="object[name]"> and used here
app.post('/register', function (req, res) {
    'use strict';
    var username = req.body.username,
        password = req.body.password;
    User.register(new User({
        username: username
    }), password, function (err, user) {
        if (err) {
            console.log(err);
            return res.render('register');
        } else {
            passport.authenticate("local")(req, res, function () {
                res.redirect("/secret");
            });
        }
    });
});

app.get('/login', function (req, res) {
    'use strict';
    res.render('login');
});

app.post('/login', passport.authenticate('local', {
    successRedirect: "/secret",
    failureRedirect: "/login"
}), function (req, res) {
    'use strict';
    // intentionally left empty
});

app.get('/logout', function (req, res) {
    'use strict';
    req.logout();
    res.redirect("/");
});

// end of routes //////////////////////////////////////////////////////////////

app.listen(3000, function () {
    'use strict';
    console.log('...they are not midgets, they are little people!');
});