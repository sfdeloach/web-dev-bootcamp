// Setup up libraries and frameworks
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
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

// allow req.user to be visible in all routes
app.use(function (req, res, next) {
    res.locals.currentUser = req.user;
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
app.listen(3000, function () {
    console.log("YelpCamp server is listening on port 3000...");
});