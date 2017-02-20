/*
 * Use mongoose.db to connect to a database and demonstrate CRUD actions:
 *
 *     CREATE - 
 *
 */

// Setup mongoose
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

// Attempt a connection to db
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function () {
    // We only begin working with the db once this callback occurs
    'use strict';
    console.log('connection to mongoDB successful!');

    // Define pattern for each document stored in the collection
    var officerSchema = mongoose.Schema({
        lastName: String,
        firstName: String,
        middleName: String,
        sex: String,
        cityIdNumber: Number,
        deptIdNumber: Number,
        hireDate: Date,
        seperationDate: Date,
        isSworn: Boolean
    });

    // Compile schema into a model, this is used later to create documents
    var Officer = mongoose.model('Officer', officerSchema);

    // Create a document
    var steven = new Officer({
        lastName: "DeLoach",
        firstName: "Steven",
        middleName: "Frederick",
        sex: "M",
        cityIdNumber: 2004112,
        deptIdNumber: 100531,
        dob: "04/12/1976",
        hireDate: "09/18/2004",
        seperationDate: null,
        isSworn: true
    });

    console.log(steven);
    console.log("End of script...");

});
