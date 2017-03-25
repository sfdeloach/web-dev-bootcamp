/*jslint node: true */
'use strict';

// Setup up libraries and frameworks
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    flash = require('connect-flash'),
    passport = require('passport'),
    LocalStrategy = require('passport-local'),
    methodOverride = require('method-override'),
    Campground = require('./models/campground'),
    Comment = require('./models/comment'),
    User = require('./models/user'),
    seedDb = require('./seeds');

var campgroundRoutes = require('./routes/campgrounds.js'),
    commentRoutes = require('./routes/comments.js'),
    indexRoutes = require('./routes/index.js');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));
app.use(methodOverride("_method"));
app.use(flash());

// using 127.0.0.1 below will not require an active internet connection
// using localhost will require an active internet connection
mongoose.connect('mongodb://localhost/yelp_camp');

// Seed database for testing -- currently disabled
// seedDb();

// Passport config
app.use(require("express-session")({
    secret: "special secret message!",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// allow req.user and flash messages to be visible in all routes
app.use(function (req, res, next) {
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
});

// campground routes
/*
 *     We insert "/campgrounds" as the first argument here, and this eliminates
 *     the need to start our routes with this prefix, see routes/campgrounds.js
 *     for more details
 */
app.use("/campgrounds", campgroundRoutes);

// comments routes
app.use("/campgrounds/:id/comments", commentRoutes);

// index (auth) routes
app.use(indexRoutes);

// Start server
var server = app.listen(process.env.PORT || 3000, function () {
    var activePort = server.address().port,
        startDate = new Date().toLocaleString();
    console.log('[%s] YelpCamp server is listening on port %s', startDate, activePort);
});
