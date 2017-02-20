// Setup mongoose
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/officers');

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
        hireDate: "09/13/2004",
        seperationDate: "02/19/2017",
        isSworn: true
    });

    // Save the document to the collection
    steven.save(function (err, officer) {
        if (err) {
            console.log("An error occurred during save(): " + err);
        } else {
            console.log("\nsave() was successful:\n" + officer);
        }
    });

    // This next block of code combines the two previous, it creates and saves in one block
    Officer.create({
        lastName: "Murphy",
        firstName: "Timothy",
        middleName: "James",
        sex: "M",
        cityIdNumber: 2002085,
        deptIdNumber: 100483,
        dob: "12/30/1978",
        hireDate: "04/25/2002",
        seperationDate: null,
        isSworn: true
    }, function (err, officer) {
        if (err) {
            console.log("An error occurred during create(): " + err);
        } else {
            console.log("\ncreate() was successful:\n" + officer);
        }
    });

    // Return all documents inside Officer
    Officer.find({}, function (err, officers) {
        if (err) {
            console.log("An error occurred during find(): " + err);
        } else {
            console.log("\nfind() was successful:\n" + officers);
        }
    });

    console.log("End of script...");
});
