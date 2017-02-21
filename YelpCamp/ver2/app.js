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
    console.log("GET request for /");
    res.render('landing.ejs');
});

// RESTful route: INDEX
app.get('/index', function (req, res) {
    console.log("GET request for /campgrounds");
    
    // Connects to db, results no longer come from array located within this file
    Campground.find({}, function (err, allCampgrounds) {
        if (err) {
            console.log(err);
        } else {
            res.render('campgrounds.ejs', {
                campgrounds: allCampgrounds
            });
        }
    });
});

// RESTful route: CREATE
app.post('/campgrounds', function (req, res) {
    console.log("POST request for /campgrounds");
    
    // Connects to db, posts are no longer appended to array located within this file
    // TODO: Validate (and sanitize) user input?
    Campground.create({
        name: req.body.location,
        image: req.body.imageUrl,
        description: req.body.description
    }, function (err, campground) {
        if (err) {
            console.log("An error occured during create(): " + err);
        } else {
            console.log("\ncreate() was successful:\n" + campground);
            res.redirect('/index');
        }
    });
});

// RESTful route: NEW
app.get('/campgrounds/new', function (req, res) {
    console.log("GET request for /campgrounds/new");
    res.render('new-campgrounds.ejs');
});

// RESTful route: SHOW
app.get('/campgrounds/:id', function (req, res) {
    var id = req.params.id;
    console.log("GET request for /campgrounds/" + id);
    // TODO: Campground.findById(id, function (err, foundCampground) { res.render('campground-details.ejs', { campground: foundCampground }); })
    res.send('<a href="/">You have reached the SHOW page, stay tuned for further developments...</a>');
});

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