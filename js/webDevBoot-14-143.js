//console.log("Color Changer");
//console.log("linked to webDevBoot-14-143.html");
//console.log("created by sfdeloach on 01/23/2017");

function RgbColor(r, g, b) {
    'use strict';
    this.r = (typeof r === 'undefined') ? this.r = 255 : this.r = r;
    this.g = (typeof g === 'undefined') ? this.g = 255 : this.g = g;
    this.b = (typeof b === 'undefined') ? this.b = 255 : this.b = b;
    this.randomize = function () {
        this.r = this.rn();
        this.g = this.rn();
        this.b = this.rn();
    };
    this.toArray = function () {
        var a = [];
        a.push(this.r);
        a.push(this.g);
        a.push(this.b);
        return a;
    };
    this.toString = function () {
        return 'rgb(' + this.toArray() + ')';
    };
    this.rn = function () {
        return Math.round(Math.random() * 255);
    };
}

var button = document.querySelector('button');
var body = document.querySelector('body');
var oldColor = new RgbColor();
var newColor = new RgbColor(0, 0, 0);

button.addEventListener("click", function () {
    "use strict";
    oldColor.r = newColor.r;
    oldColor.g = newColor.g;
    oldColor.b = newColor.b;
    newColor.randomize();
    body.style.backgroundColor = newColor.toString();
});
