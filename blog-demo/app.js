// Setup up libraries and frameworks
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static('public'));
mongoose.connect('mongodb://localhost/blog-demo'); // using 127.0.0.1 over localhost, does not
                                                   // require an active internet connection
// Schema setup
var blogSchema = new mongoose.Schema({
    title: String,
    message: String,
    image: String,
    isActive: Boolean // flag used for a soft delete
});

// Model created from schema
var Blog = mongoose.model('Blog', blogSchema);

// index GET display list of all blog entries
app.get('/blog-entries', function (req, res) {
    console.log('index');
    var blogs = Blog.find({}, function (err, blogs) {
        if (err) {
            console.log('!!! INDEX ROUTE ERROR !!!');
            console.log(err);
        } else {
            res.render('index.ejs', {
                blogs: blogs
            });
        }
    });
});

// new GET display form for a new blog entry
app.get('/blog-entries/new', function (req, res) {
    console.log('new');
    res.render('new.ejs');
});

// create POST adds new blog entry to the db
app.post('/blog-entries', function (req, res) {
    console.log('create');
    Blog.create({
        title: req.body.title,
        message: req.body.message,
        image: req.body.image,
        isActive: true
    }, function (err, blog) {
        if (err) {
            console.log('!!! CREATE ROUTE ERROR !!!');
            console.log(err);
        } else {
            res.redirect('/blog-entries');
        }
    });
});

// show GET shows more info on one blog
app.get('/blog-entries/:id', function (req, res) {
    console.log('show');
    Blog.findById(req.params.id, function (err, foundBlog) {
        res.render('show.ejs', {
            blog: foundBlog
        });
    });
});

// edit GET display form to edit campground
app.get('/blog-entries/:id/edit', function (req, res) {
    console.log('edit');
    Blog.findById(req.params.id, function (err, foundBlog) {
        res.render('edit.ejs', {
            blog: foundBlog
        });
    });
});

// update PUT alters existing blog in db  <-- This is not correct at all!!!
app.put('/blog-entries/:id', function (req, res) {
    console.log('update');
    var query = { _id: req.params.id };
    Blog.update(query, {
        title: req.body.title,
        message: req.body.message,
        image: req.body.image,
        isActive: true
    }, function (err, blog) {
        if (err) {
            console.log('!!! UPDATE ROUTE ERROR !!!');
            console.log(err);
        } else {
            res.redirect('/blog-entries');
        }
    });
});

// TODO destroy /campgrounds/:id      DELETE removes doc from db

app.listen(3000, function () {
    console.log("blog-demo app is listening on port 3000");
});