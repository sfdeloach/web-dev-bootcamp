// Import library
var mongoose = require('mongoose');

// Schema setup
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String,
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
    }]
});

// Model created from schema, returned to calling script
module.exports = mongoose.model("Campground", campgroundSchema);