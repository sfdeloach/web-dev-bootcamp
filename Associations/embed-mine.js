var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/embedded-example');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {

	var officerSchema = mongoose.Schema({
    	name: String,
    	deptID: Number
	});

	var assessmentSchema = mongoose.Schema({
		date: Date,
		score: Number,
		officer: [officerSchema]
	});

	var Assessment = mongoose.model('Assessment', assessmentSchema);

	var assesment1 = new Assessment({date: "12/31/2000", score: 0.95});
	var assesment2 = new Assessment({date: "12/31/2001", score: 0.93});
	var officerEx = { 
        name: 'John Doe',
        deptID: 700,
        extra: "Extra crap!"
    };
	assesment1.officer.push(officerEx);
	assesment2.officer.push(officerEx);

	assesment1.save(function (err, assesment) {
		if (err) {
			console.log(err);
		} else {
			console.log(assesment);
		}
	});

	assesment2.save(function (err, assesment) {
		if (err) {
			console.log(err);
		} else {
			console.log(assesment);
		}
	});
});