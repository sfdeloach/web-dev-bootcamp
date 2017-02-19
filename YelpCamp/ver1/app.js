var campgrounds = [
    {
        name: "Piney Ridge Utopia",
        image: "https://c1.staticflickr.com/7/6204/6047319257_b27c1be597_z.jpg"
    },
    {
        name: "Smokey Mountain Paradise",
        image: "https://c1.staticflickr.com/5/4137/4825496283_7247cf6212_z.jpg"
    },
    {
        name: "Knobby Hillside Eden",
        image: "https://c2.staticflickr.com/8/7215/7182369178_5572295ce0_z.jpg"
    },
    {
        name: "Verde Valley Nirvana",
        image: "https://c2.staticflickr.com/6/5532/12009674985_4b0029f766_z.jpg"
    },
    {
        name: "Belle Bluff Shangri-La",
        image: "https://c1.staticflickr.com/5/4118/4927666269_87f6ca6a8d_z.jpg"
    },
    {
        name: "Del Boca Vista",
        image: "https://c2.staticflickr.com/8/7661/17293711022_e749003f03_z.jpg"
    },
    {
        name: "Piney Ridge Utopia",
        image: "https://c1.staticflickr.com/7/6204/6047319257_b27c1be597_z.jpg"
    },
    {
        name: "Smokey Mountain Paradise",
        image: "https://c1.staticflickr.com/5/4137/4825496283_7247cf6212_z.jpg"
    },
    {
        name: "Knobby Hillside Eden",
        image: "https://c2.staticflickr.com/8/7215/7182369178_5572295ce0_z.jpg"
    },
    {
        name: "Verde Valley Nirvana",
        image: "https://c2.staticflickr.com/6/5532/12009674985_4b0029f766_z.jpg"
    },
    {
        name: "Belle Bluff Shangri-La",
        image: "https://c1.staticflickr.com/5/4118/4927666269_87f6ca6a8d_z.jpg"
    },
    {
        name: "Del Boca Vista",
        image: "https://c2.staticflickr.com/8/7661/17293711022_e749003f03_z.jpg"
    }
];

var express = require('express');
var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', function (req, res) {
    console.log("GET request for /");
    res.render('landing.ejs');
});

app.get('/campgrounds', function (req, res) {
    console.log("GET request for /campgrounds");
    res.render('campgrounds.ejs', {
        campgrounds: campgrounds
    });
});

app.post('/campgrounds', function (req, res) {
    console.log("POST request for /campgrounds");
    campgrounds.push({ name: req.body.location, image: req.body.imageUrl });
    res.redirect('/campgrounds');
});

app.get('/campgrounds/new', function (req, res) {
	console.log("GET request for /campgrounds/new");
	res.render('new-campgrounds.ejs');
});

app.listen(3001, function () {
    console.log("YelpCamp server is listening on port 3001...");
});