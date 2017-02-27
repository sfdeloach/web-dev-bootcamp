// Setup up libraries and frameworks
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    methodOverride = require('method-override'),
    expressSanitizer = require('express-sanitizer');

// App configurations
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(expressSanitizer()); // must come after app.use(bodyParser...)
app.use(express.static('public'));
app.use(methodOverride("_method")); // workaround for PUT and DELETE
mongoose.connect('mongodb://localhost/blog-demo');

// Schema setup - may wish to provide defaults on fields,
// weird behavior may result when operations/methods are
// performed on empty sets...on second thought, setting up
// defaults is pointless on fields available to the user to
// provide input on since an empty input on a form will
// override the defaults specified here
var blogSchema = new mongoose.Schema({
    title: String,
    message: String,
    image: String,
    created: {
        type: Date,
        default: Date.now
    },
    isActive: { // soft delete flag
        type: Boolean,
        default: true
    }
});

// Model created from schema
var Blog = mongoose.model('Blog', blogSchema);

// RESTFUL ROUTES /////////////////////////////////////////////////////////////

app.get('/', function (req, res) {
    res.redirect('/blog-entries');
});

// INDEX - GET display list of all blog entries
app.get('/blog-entries', function (req, res) {
    Blog.find({isActive: true}, function (err, blogs) {
        if (err) {
            console.log('!!! INDEX ROUTE ERROR !!!');
            console.log(err);
            res.send('Error, unable to get INDEX');
        } else {
            res.render('index.ejs', {
                blogs: blogs
            });
        }
    });
});

// NEW - GET display form for a new blog entry
app.get('/blog-entries/new', function (req, res) {
    res.render('new.ejs');
});

// CREATE - POST adds new blog entry to the db
app.post('/blog-entries', function (req, res) {
    req.body.blog.message = req.sanitize(req.body.blog.message);
    Blog.create(req.body.blog, function (err, blog) {
        if (err) {
            console.log('!!! CREATE ROUTE ERROR !!!');
            console.log(err);
            res.send('Error, unable to CREATE document');
        } else {
            res.redirect('/blog-entries');
        }
    });
});

// SHOW - GET shows more info on one blog
app.get('/blog-entries/:id', function (req, res) {
    Blog.findById(req.params.id, function (err, foundBlog) {
        if (err) {
            console.log('!!! SHOW ROUTE ERROR !!!');
            console.log(err);
            res.send('Error, unable to SHOW document')
        } else {
            res.render('show.ejs', {
                blog: foundBlog
            });
        }
    });
});

// EDIT - GET display form to edit blog
app.get('/blog-entries/:id/edit', function (req, res) {
    Blog.findById(req.params.id, function (err, foundBlog) {
        if (err) {
            console.log('!!! EDIT ROUTE ERROR !!!');
            console.log(err);
            res.send('Error, unable to EDIT document');
        } else {
            res.render('edit.ejs', {
                blog: foundBlog
            });
        }
    });
});

// UPDATE - PUT alters existing blog in db
app.put('/blog-entries/:id', function (req, res) {
    req.body.blog.message = req.sanitize(req.body.blog.message);
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, function (err, blog) {
        if (err) {
            console.log('!!! UPDATE ROUTE ERROR !!!');
            console.log(err);
            res.send('Error, unable to UPDATE document');
        } else {
            res.redirect('/blog-entries/' + req.params.id);
        }
    });
});

// SOFT DELETE (non-standard REST route) - changes isActive to false
app.put('/blog-entries/:id/soft-delete', function (req, res) {
    Blog.findByIdAndUpdate(req.params.id, {isActive: false}, function (err) {
        if (err) {
            console.log('!!! SOFT DELETE ROUTE ERROR !!!');
            console.log(err);
            res.send('Error, unable to SOFT DELETE document');
        } else {
            res.redirect('/blog-entries');
        }
    });
});

// DESTROY - DELETE removes document from db
app.delete('/blog-entries/:id', function (req, res) {
    Blog.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            console.log('!!! DESTROY ROUTE ERROR !!!');
            console.log(err);
            res.send('Error, unable to DESTROY document');
        } else {
            res.redirect('/blog-entries/');
        }
    });
});

// END OF RESTFUL ROUTES //////////////////////////////////////////////////////

// Start server
app.listen(3000, function () {
    console.log("blog-demo app is listening on port 3000");
});