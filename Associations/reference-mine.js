// Setup mongoose
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/reference-example');

// Create collections
var Equipment = require('./models/equipment.js');
var Officer = require('./models/officer.js');

// Create documents
//var newGlock = new Equipment({
//    make: "Glock",
//    model: "17 GEN4",
//    serialNo: "GXV7634"
//});
//
//var newOfficer = new Officer({
//    name: "Jack Smith",
//    id: 702
//});

// Save documents to respective 
//newGlock.save(function (err, glock) {
//    'use strict';
//    if (!err) {
//        console.log(glock);
//    }
//});
//
//newOfficer.save(function (err, ofc) {
//    'use strict';
//    if (!err) {
//        console.log(ofc);
//    }
//});

// Finds an existing officer document and an existing equipment
// document and then assigns each to the other
Officer.findOne({
    id: 700
}, function (err, ofc) {
    'use strict';
    if (err) {
        console.log(err);
    } else {
        Equipment.findOne({
            serialNo: "GXV3428"
        }, function (err, foundequipment) {
            ofc.assignedEquipment.push(foundequipment);
            foundequipment.assignedOfc.push(ofc);
            ofc.save(function (err) {
                if (err) {
                    console.log(err);
                }
            });
            foundequipment.save(function (err) {
                if (err) {
                    console.log(err);
                }
            });
            console.log("equipment assigned");
        });
    }
});