var express = require("express"),
    router = express.Router({
        mergeParams: true // allows req.params.id to be visible
    }),
    Campground = require('../models/campground'),
    Comment = require('../models/comment');

// import middleware we created ourselves
// note: index.js is not required in the require below since any file titled
//       'index' will be defaulted to if noting is specified.
var middleware = require("../middleware/index.js");

// RESTful route: NEW
router.get('/new', middleware.isLoggedIn, function (req, res) {
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
router.post('/', middleware.isLoggedIn, function (req, res) {
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
                    req.flash("error", "Something went wrong...sorry about that.");
                    console.log(err);
                } else {
                    // add username and id to comment
                    newComment.author.id = req.user._id;
                    newComment.author.username = req.user.username;
                    // save the comment
                    newComment.save();
                    // connect new comment to campground
                    foundCampground.comments.push(newComment);
                    foundCampground.save();
                    // add flash message
                    req.flash("success", "Successfully added your comment!");
                    // redirect to campground show page
                    res.redirect('/campgrounds/' + id);
                }
            });
        }
    });
});

// RESTful route: EDIT
router.get('/:comment_id/edit', middleware.checkCommentOwnership, function (req, res) {
    Comment.findById(req.params.comment_id, function (err, foundComment) {
        if (err) {
            res.redirect("back");
        } else {
            res.render("comments/edit", {
                campground_id: req.params.id,
                comment: foundComment
            });
        }
    });
});

// RESTful route: UPDATE
router.put('/:comment_id', middleware.checkCommentOwnership, function (req, res) {
    Comment.findByIdAndUpdate(req.params.comment_id, req.body.comment, function (err, updatedComment) {
        if (err) {
            res.redirect("back");
        } else {
            res.redirect("/campgrounds/" + req.params.id);
        }
    });
});

// RESTful route: DESTROY
router.delete('/:comment_id', middleware.checkCommentOwnership, function (req, res) {
    Comment.findByIdAndRemove(req.params.comment_id, function (err) {
        if (err) {
            res.redirect("back");
        } else {
            req.flash("success", "Your comment has been deleted!");
            res.redirect("/campgrounds/" + req.params.id);
        }
    });
});

module.exports = router;