/*jslint node: true */
'use strict';

// Create a constructor function for a Vehicle: every object created from this constructor should have a make, model, and year property. Each object should also have a property called isRunning, which should be set to false
function Vehicle(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.isRunning = false;
}

// Every object created from the Vehicle constructor should have a function called turnOn, which changes the isRunning property to true
Vehicle.prototype.turnOn = function () {
    this.isRunning = true;
    return;
};

// Every object created from the Vehicle constructor should have a function called turnOff, which changes the isRunning property to false
Vehicle.prototype.turnOff = function () {
    this.isRunning = false;
    return;
};

// Every object created from the Vehicle constructor should have a method called honk, which returns the string "beep" ONLY if the isRunning property is true
Vehicle.prototype.honk = function () {
    if (this.isRunning) {
        return "beep";
    }
};
