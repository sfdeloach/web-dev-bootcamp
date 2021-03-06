// Setup up libraries and frameworks
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    passport = require('passport'),
    LocalStrategy = require('passport-local'),
    Campground = require('./models/campground'),
    Comment = require('./models/comment'),
    User = require('./models/user'),
    seedDb = require('./seeds');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static(__dirname + '/public'));

// using 127.0.0.1 below will not require an active internet connection
// using localhost will require an active internet connection
mongoose.connect('mongodb://localhost/yelp_camp');

// Seed database for testing
seedDb();

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

// auth middleware
function isLoggedIn(req, res, next) {
    'use strict';
    if (req.isAuthenticated()) {
        return next();
    } else {
        res.redirect("/login");
    }
}

// =====================
// Setup routes
// =====================
app.get('/', function (req, res) {
    console.log("[ ]      GET request for /");
    res.render('landing.ejs');
});

// RESTful route: INDEX
app.get('/campgrounds', function (req, res) {
    console.log("[INDEX]  GET request for /campgrounds");
    Campground.find({}, function (err, foundCampground) {
        if (err) {
            console.log(err);
        } else {
            res.render('campgrounds/index.ejs', {
                campgrounds: foundCampground
            });
        }
    });
});

// RESTful route: NEW
app.get('/campgrounds/new', function (req, res) {
    console.log("[NEW]    GET request for /campgrounds/new");
    res.render('campgrounds/new.ejs');
});

// RESTful route: CREATE
app.post('/campgrounds', function (req, res) {
    console.log("[CREATE] POST request for /campgrounds");
    // TODO: Validate (and sanitize) user input? <-- only if <%- %> is used in template, open to script attack
    Campground.create(req.body.campground, function (err, campground) {
        if (err) {
            console.log("An error occured during create(): " + err);
        } else {
            res.redirect('/campgrounds');
        }
    });
});

// RESTful route: SHOW
app.get('/campgrounds/:id', function (req, res) {
    var id = req.params.id;
    console.log("[SHOW]   GET request for /campgrounds/" + id);
    Campground.findById(id).populate("comments").exec(function (err, foundCampground) {
        if (err) {
            console.log(err);
        } else {
            res.render('campgrounds/show.ejs', {
                campground: foundCampground
            });
        }
    });
});

// TODOs:
// RESTful route: EDIT
// RESTful route: UPDATE
// RESTful route: DESTROY

// =====================
// START - Setup nested routes
// =====================

// RESTful route: NEW
app.get('/campgrounds/:id/comments/new', isLoggedIn, function (req, res) {
    var id = req.params.id;
    console.log("[NEW]    GET request for /campgrounds/" + id + "/comments/new");
    // find campground by id
    Campground.findById(id).populate("comments").exec(function (err, foundCampground) {
        if (err) {
            console.log(err);
        } else {
            res.render('comments/new.ejs', {
                campground: foundCampground
            });
        }
    });
});

// RESTful route: CREATE
app.post('/campgrounds/:id/comments', isLoggedIn, function (req, res) {
    var id = req.params.id;
    console.log("[CREATE] POST request for /campgrounds/" + id + "/comments");
    // lookup campground
    Campground.findById(id, function (err, foundCampground) {
        if (err) {
            console.log(err);
        } else {
            // create new comment
            Comment.create(req.body.comment, function (err, newComment) {
                if (err) {
                    console.log(err);
                } else {
                    // connect new comment to campground
                    foundCampground.comments.push(newComment);
                    foundCampground.save();
                    // redirect to campground show page
                    res.redirect('/campgrounds/' + id);
                }
            });
        }
    });
});

// =====================
// END - Setup nested routes
// =====================

// =====================
// START - Setup auth routes
// =====================

// show register form
app.get("/register", function (req, res) {
    res.render("register.ejs");
});

app.post("/register", function (req, res) {
    var newUser = new User({
        username: req.body.username
    });
    User.register(newUser, req.body.password, function (err, user) {
        if (err) {
            console.log(err);
            return res.render("register.ejs");
        }
        passport.authenticate("local")(req, res, function () {
            res.redirect("/campgrounds");
        });
    });
});

// show login form
app.get("/login", function (req, res) {
    res.render("login.ejs");
});

// login logic goes here
app.post("/login", passport.authenticate("local", {
    successRedirect: "/campgrounds",
    failureRedirect: "/login"
}), function (req, res) {
    //TODO - callback goes here
});

// logout route
app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/campgrounds");
});

// =====================
// END - Setup auth routes
// =====================

// Start server
app.listen(3000, function () {
    console.log("YelpCamp server is listening on port 3000...");
});