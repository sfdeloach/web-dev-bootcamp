var mongoose = require('mongoose');

// Design collection
var equipmentSchema = mongoose.Schema({
    make: String,
    model: String,
    serialNo: String,
    assignedOfc: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Officer'
    }]
});

module.exports = mongoose.model('Equipment', equipmentSchema);