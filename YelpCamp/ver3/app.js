// Setup up libraries and frameworks
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    Campground = require('./models/campground'),
    seedDb = require('./seeds');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static('public'));

// using 127.0.0.1 below will not require an active internet connection
// using localhost will require an active internet connection
mongoose.connect('mongodb://localhost/yelp_camp');

// Seed database for testing
seedDb();

// Setup routes
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
            res.render('index.ejs', {
                campgrounds: foundCampground
            });
        }
    });
});

// RESTful route: NEW
app.get('/campgrounds/new', function (req, res) {
    console.log("[NEW]    GET request for /campgrounds/new");
    res.render('new.ejs');
});

// RESTful route: CREATE
app.post('/campgrounds', function (req, res) {
    console.log("[CREATE] POST request for /campgrounds");
    // TODO: Validate (and sanitize) user input?
    Campground.create({
        name: req.body.location,
        image: req.body.imageUrl,
        description: req.body.description
    }, function (err, campground) {
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
            res.render('show.ejs', {
                campground: foundCampground
            });
        }
    });
});

// TODOs:
// RESTful route: EDIT
// RESTful route: UPDATE
// RESTful route: DESTROY

// Start server
app.listen(3001, function () {
    console.log("YelpCamp server is listening on port 3001...");
});