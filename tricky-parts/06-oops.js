/*jslint node: true */
'use strict';

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.numWheels = 4;
}

function Motorcycle1(make, model, year) {
    Car.call(this, make, model, year);
    this.numWheels = 2;
}

function Motorcycle2(make, model, year) {
    Car.apply(this, [make, model, year]);
    this.numWheels = 2;
}

function Motorcycle3(make, model, year) {
    Car.apply(this, arguments);
    this.numWheels = 2;
}

var foo = new Motorcycle1('Honda', 'CBR1000', 2016);
var bar = new Motorcycle2('Honda', 'CBR1000', 2016);
var zum = new Motorcycle3('Honda', 'CBR1000', 2016);
