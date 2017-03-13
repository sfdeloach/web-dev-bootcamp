// Import library
var mongoose = require('mongoose');

// Schema setup
var commentSchema = new mongoose.Schema({
    text: String,
    author: String
});

// Model created from schema, returned to calling script
module.exports = mongoose.model("Comment", commentSchema);