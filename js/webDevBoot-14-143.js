//console.log("Color Changer");
//console.log("linked to webDevBoot-14-143.html");
//console.log("created by sfdeloach on 01/23/2017");

// Object Constructor
function RgbColor(r, g, b) {
    'use strict';
    this.r = (0 <= r && r <= 255) ? this.r = r : this.r = 255;
    this.g = (0 <= g && g <= 255) ? this.g = g : this.g = 255;
    this.b = (0 <= b && b <= 255) ? this.b = b : this.b = 255;
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
    this.deepCopy = function (rgb) {
        if (rgb instanceof RgbColor) {
            this.r = rgb.r;
            this.g = rgb.g;
            this.b = rgb.b;
        }
    };
}

var button = document.querySelector('button'),
    body = document.querySelector('body'),
    oldColor = new RgbColor(),
    newColor = new RgbColor();

button.addEventListener("click", function () {
    "use strict";
    oldColor.deepCopy(newColor);
    newColor.randomize();
    body.style.backgroundColor = newColor.toString();
});