var express = require("express"),
    router = express.Router(),
    Campground = require('../models/campground');

// import middleware we created ourselves
// note: index.js is not required in the require below since any file titled
//       'index' will be defaulted to if noting is specified.
var middleware = require("../middleware/index.js");

/*    Note about routes:
 *
 *    '/campgrounds' has been removed from the beginning of each route because
 *    we use this as a prefix in the calling app.use() function
 */

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
router.get('/new', middleware.isLoggedIn, function (req, res) {
    console.log("[NEW]    GET request for /campgrounds/new");
    res.render('campgrounds/new.ejs');
});

// RESTful route: CREATE
router.post('/', middleware.isLoggedIn, function (req, res) {
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
router.get('/:id/edit', middleware.checkCampgroundOwnership, function (req, res) {
    // no need to do any error handling, the middleware will take care of this
    Campground.findById(req.params.id, function (err, foundCampground) {
        if (err) {
            req.flash("error", "Campground not found!");
            res.redirect("/campgrounds");
        } else {
            res.render("campgrounds/edit.ejs", {
                campground: foundCampground
            });
        }
    });
});

// RESTful route: UPDATE
router.put('/:id', middleware.checkCampgroundOwnership, function (req, res) {
    // find and update the correct campground, no need to do any error handling, 
    // the middleware will take care of this
    Campground.findByIdAndUpdate(req.params.id, req.body.campground, function (err, updatedCampground) {
        if (err) {
            req.flash("error", "Unable to update campground!");
            res.redirect("/campgrounds");
        } else {
            res.redirect("/campgrounds/" + req.params.id);
        }
    });
});

// RESTful route: DESTROY
router.delete('/:id', middleware.checkCampgroundOwnership, function (req, res) {
    // no need to do any error handling, the middleware will take care of this
    Campground.findByIdAndRemove(req.params.id, function (err) {
        req.flash("success", "Your campground has been deleted!");
        res.redirect("/campgrounds");
    });
});

module.exports = router;