// Import library
var mongoose = require('mongoose');

// Schema setup
// new in version 8, author is now an object
var commentSchema = new mongoose.Schema({
    text: String,
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String
    }
});

// Model created from schema, returned to calling script
module.exports = mongoose.model("Comment", commentSchema);