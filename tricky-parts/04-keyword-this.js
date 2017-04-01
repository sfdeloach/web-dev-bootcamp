/*jslint node: true */
'use strict';

function ThisHouse(bedrooms, bathrooms, area, price) {
    this.bedrooms = bedrooms;
    this.bathrooms = bathrooms;
    this.area = area;
    this.price = price;
    this.pricePerSqft = function () {
        return this.price / this.area;
    };
}

function ArgHouse(bedrooms, bathrooms, area, price) {
    this.bedrooms = bedrooms;
    this.bathrooms = bathrooms;
    this.area = area;
    this.price = price;
    this.pricePerSqft = function () {
        return price / area;
    };
}

function foo(stuff) {
    this.stuff = stuff;
    return this;
}

var house1 = new ThisHouse(4, 3, 2200, 399900);
var house2 = new ArgHouse(4, 3, 2200, 399900);
console.log("ThisHouse: " + house1.pricePerSqft());
console.log("ArgHouse: " + house2.pricePerSqft());