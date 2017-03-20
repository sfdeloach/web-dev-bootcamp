var express = require("express"),
    router = express.Router(),
    passport = require('passport'),
    User = require('../models/user');

// import middleware we created ourselves
// note: index.js is not required in the require below since any file titled
//       'index' will be defaulted to if noting is specified.
// var middleware = require("../middleware/index.js"); <-- Not used???

// index route
router.get('/', function (req, res) {
    console.log("[ ]      GET request for /");
    res.render('landing.ejs');
});

// show register form
router.get("/register", function (req, res) {
    res.render("register.ejs");
});

router.post("/register", function (req, res) {
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
router.get("/login", function (req, res) {
    res.render("login.ejs");
});

// login logic goes here
router.post("/login", passport.authenticate("local", {
    successRedirect: "/campgrounds",
    failureRedirect: "/login"
}), function (req, res) {
    //TODO - callback goes here
});

// logout route
router.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/campgrounds");
});

module.exports = router;