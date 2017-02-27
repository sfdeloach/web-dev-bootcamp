var mongoose = require('mongoose');

// Design collection
var officerSchema = mongoose.Schema({
    name: String,
    id: Number,
    assignedEquipment: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Equipment'
    }]
});

module.exports = mongoose.model('Officer', officerSchema);