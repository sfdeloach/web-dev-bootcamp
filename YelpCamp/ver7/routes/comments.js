var express = require("express"),
    router = express.Router({
        mergeParams: true // allows req.params.id to be visible
    }),
    Campground = require('../models/campground'),
    Comment = require('../models/comment');

// auth middleware
function isLoggedIn(req, res, next) {
    'use strict';
    if (req.isAuthenticated()) {
        return next();
    } else {
        res.redirect("/login");
    }
}

// RESTful route: NEW
router.get('/new', isLoggedIn, function (req, res) {
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
router.post('/', isLoggedIn, function (req, res) {
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

module.exports = router;