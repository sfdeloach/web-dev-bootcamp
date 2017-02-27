# YelpCamp
> Web Developer's Bootcamp by Colt Steele

## version 1 (02/18/2017)

### objectives set 0 - Setup inital pages

* setup route for landing page
* setup route for campgrounds Page, list three campgrounds
* each campground has a name and an image
* no database connection (coming soon!)
* no styling

### objectives set 1 - Create partials

* create header and footer partials
* add Bootstrap

### objectives set 2 - Create new campgrounds

* Setup new campground post route - REST intro, GET and POST with same route names
* Add in body-parser
* Setup route to show form - REST convention POST GET /campgrounds/[new]
* Add basic unstyled form

Test URLs for images: 


    Eden https://c2.staticflickr.com/8/7215/7182369178_5572295ce0_z.jpg
    Shangri-La https://c1.staticflickr.com/5/4118/4927666269_87f6ca6a8d_z.jpg
    Elysium https://c2.staticflickr.com/8/7661/17293711022_e749003f03_z.jpg

### objective set 3 - Improve w/ Bootstrap

* Add a better header (jumbotron, container)
* Make campgrounds display in a grid (thumbnails, style=display: flex);
* Lesson learned - be careful of div placement around ejs loops

### objective set 4 - Style the navbar and form

* Add a navbar to all templates - copy the Bootstrap navbar example and edit
* Style the new campground form
* Created style.css sheet

## version 2 (02/22/2017)

### objective set 5 - Add mongoose.js

* Install and configure mongoose
* Setup campground model
* Use campground model inside of our routes - only added create() and find() features

### objective set 6 - Show page

* Review the RESTful routes we have so far
* Add description to our campground model
* Show db.collection.drop()
* Add a show route/template

### summary of 7 RESTful routing

name    url                   verb   description                        mongoose method
-------------------------------------------------------------------------------------------------------
index   /campgrounds          GET    display list of all campgrounds    Campground.find()

new     /camgrounds/new       GET    display form for a new campground  N/A
create  /campgrounds          POST   adds new doc to the db             Campground.create()

show    /campgrounds/:id      GET    shows info about one campground    Campground.findById()

edit    /campgrounds/:id/edit GET    display form to edit campground    Campground.findById()
update  /campgrounds          PUT    alters existing doc in db          Campground.findByIdAndUpdate()

destroy /campgrounds/:id      DELETE removes doc from db                Campground.findByIdAndRemove()

## version 3 (02/27/2017)

### objective set 7 - refactor mongoose code

* Create a models directory for campgrounds, this will later include users and comments schemas
* Use module.exports (goes hand-in-hand with require())
* Require everything correctly!

### objective set 8 - add a seeds script

* Add a seeds.js file to populate the database with data
* Run the seeds file every time the server starts
* This is a tool used to test route setups

### objective set 9 - add the comment model
* Make the errors go away - error driven development
* Display the comments associated with the campgrounds
* Slight refactor, rename view files to match RESTful conventions

### objective set 10 - ???






















