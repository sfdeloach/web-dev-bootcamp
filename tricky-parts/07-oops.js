/*jslint node: true */
'use strict';

function Vehicle(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

var motorcycle = new Vehicle('Honda', "CBR1000", 2015);
var car = new Vehicle('Honda', "Prelude", 1985);

console.dir(motorcycle.numWheels);
console.dir(car.numWheels);

Vehicle.prototype.numWheels = 4;

console.dir(motorcycle.numWheels);
console.dir(car.numWheels);

motorcycle.__proto__.numWheels = 2;

console.dir(motorcycle.numWheels);
console.dir(car.numWheels);