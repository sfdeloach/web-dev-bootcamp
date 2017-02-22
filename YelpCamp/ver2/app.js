// Setup up libraries and frameworks
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static('public'));
mongoose.connect('mongodb://localhost/yelp_camp'); // using 127.0.0.1 over localhost, does not
                                                   // require an active internet connection
// Schema setup
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

// Model created from schema
var Campground = mongoose.model("Campground", campgroundSchema);

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
            res.render('campgrounds.ejs', {
                campgrounds: foundCampground
            });
        }
    });
});

// RESTful route: NEW
app.get('/campgrounds/new', function (req, res) {
    console.log("[NEW]    GET request for /campgrounds/new");
    res.render('new-campgrounds.ejs');
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
    Campground.findById(id, function (err, foundCampground) {
        res.render('campground-details.ejs', {
            campground: foundCampground
        });
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

// Sample images used to populate the database:
// image: "https://c1.staticflickr.com/7/6204/6047319257_b27c1be597_z.jpg"
// image: "https://c1.staticflickr.com/5/4137/4825496283_7247cf6212_z.jpg"
// image: "https://c2.staticflickr.com/8/7215/7182369178_5572295ce0_z.jpg"
// image: "https://c2.staticflickr.com/6/5532/12009674985_4b0029f766_z.jpg"
// image: "https://c1.staticflickr.com/5/4118/4927666269_87f6ca6a8d_z.jpg"
// image: "https://c2.staticflickr.com/8/7661/17293711022_e749003f03_z.jpg"