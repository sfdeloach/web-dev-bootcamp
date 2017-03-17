var express = require("express"),
    router = express.Router(),
    Campground = require('../models/campground');

/*
 *    '/campgrounds' has been removed from the beginning of each route because
 *    we use this as a prefix in the calling app.use() function
 */

// auth middleware (new in v9)
function isLoggedIn(req, res, next) {
    'use strict';
    if (req.isAuthenticated()) {
        return next();
    } else {
        res.redirect("/login");
    }
}

// RESTful route: INDEX
router.get('/', function (req, res) {
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
router.get('/new', isLoggedIn, function (req, res) {
    console.log("[NEW]    GET request for /campgrounds/new");
    res.render('campgrounds/new.ejs');
});

// RESTful route: CREATE
router.post('/', isLoggedIn, function (req, res) {
    console.log("[CREATE] POST request for /campgrounds");
    var newCampground = req.body.campground;
    newCampground.author = {
        id: req.user._id,
        username: req.user.username
    };
    Campground.create(newCampground, function (err, newlyCreatedCampground) {
        if (err) {
            console.log("An error occured during create(): " + err);
        } else {
            console.log(newlyCreatedCampground);
            res.redirect('/campgrounds');
        }
    });
});

// RESTful route: SHOW
router.get('/:id', function (req, res) {
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

// RESTful route: EDIT
router.get('/:id/edit', function (req, res) {
    Campground.findById(req.params.id, function (err, foundCampground) {
        if (err) {
            res.redirect("/campgrounds");
        } else {
            res.render("campgrounds/edit.ejs", {campground: foundCampground});
        }
    });
});

// RESTful route: UPDATE
router.put('/:id', function (req, res) {
    // find and update the correct campground
    Campground.findByIdAndUpdate(req.params.id, req.body.campground, function (err, updatedCampground) {
        if (err) {
            res.redirect("/campgrounds");
        } else {
            res.redirect("/campgrounds/" + req.params.id);
        }
    });
    // redirect to the show page
});

// RESTful route: DESTROY
router.delete('/:id', function (req, res) {
    Campground.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            res.redirect("/campgrounds");
        } else {
            res.redirect("/campgrounds");
        }
    });
});

module.exports = router;















