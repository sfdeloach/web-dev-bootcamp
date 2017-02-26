### summary of the 7 RESTful routes

name    url                   verb   description                        mongoose method
-------------------------------------------------------------------------------------------------------
index   /campgrounds          GET    display list of all campgrounds    Campground.find()

new     /camgrounds/new       GET    display form for a new campground  N/A
create  /campgrounds          POST   adds new doc to the db             Campground.create()

show    /campgrounds/:id      GET    shows info about one campground    Campground.findById()

edit    /campgrounds/:id/edit GET    display form to edit campground    Campground.findById()
update  /campgrounds          PUT    alters existing doc in db          Campground.findByIdAndUpdate()

destroy /campgrounds/:id      DELETE removes doc from db                Campground.findByIdAndRemove()

