//console.log("Color Changer");
//console.log("linked to webDevBoot-14-143.html");
//console.log("created by sfdeloach on 01/23/2017");

// Object Constructor - Used to randomly create colors in RGB format
function RgbColor(r, g, b) {
    'use strict';

    //The three main properties of the object
    this.r = (0 <= r && r <= 255) ? r : 255;
    this.g = (0 <= g && g <= 255) ? g : 255;
    this.b = (0 <= b && b <= 255) ? b : 255;

    //Picks the next random color
    this.randomize = function () {
        this.r = this.rn();
        this.g = this.rn();
        this.b = this.rn();
    };

    //Provides an array representation of the object
    this.toArray = function () {
        var a = [];
        a.push(this.r);
        a.push(this.g);
        a.push(this.b);
        return a;
    };

    //Provides a CSS-formatted string representing the color
    this.toString = function () {
        return 'rgb(' + this.toArray() + ')';
    };

    //Random number generator from 0 to 255
    this.rn = function () {
        return Math.round(Math.random() * 255);
    };

    //Compares RgbColor object properties, returns true if same
    this.isSame = function (rgb) {
        if (rgb instanceof RgbColor) {
            var i, thisArray = this.toArray(),
                thatArray = rgb.toArray();
            for (i = 0; i < thatArray.length; i += 1) {
                if (thisArray[i] !== thatArray[i]) {
                    return false;
                }
            }
            return true;
        }
    };

    //Returns a CSS-formatted string representing the inverse color
    this.inverseToString = function () {
        var inverseArray = [],
            a = this.toArray();
        a.forEach(function (item) {
            inverseArray.push(255 - item);
        });
        return 'rgb(' + inverseArray + ')';
    };
}

//Define variables to elements in the page, set old and new color
var button = document.querySelector('button'),
    body = document.querySelector('body'),
    colorArray = document.querySelector('#color-array'),
    colorChg = document.querySelectorAll('.color-chg'),
    oldColor = new RgbColor(),
    newColor = new RgbColor();
newColor.randomize();

//Function used to fade the background to a new color
function fadeToNewColor() {
    "use strict";
    if (newColor.isSame(oldColor)) {
        newColor.randomize(); //set the next new color before exit
        return;
    } else {
        var i; // used for iteration

        if (oldColor.r !== newColor.r) {
            oldColor.r = oldColor.r < newColor.r ? oldColor.r += 1 : oldColor.r -= 1;
        }
        if (oldColor.g !== newColor.g) {
            oldColor.g = oldColor.g < newColor.g ? oldColor.g += 1 : oldColor.g -= 1;
        }
        if (oldColor.b !== newColor.b) {
            oldColor.b = oldColor.b < newColor.b ? oldColor.b += 1 : oldColor.b -= 1;
        }

        //Update the background and text based on the new increment
        body.style.backgroundColor = oldColor.toString();
        colorArray.innerHTML = "rgb[" + oldColor.toArray() + "]";
        for (i = 0; i < colorChg.length; i += 1) {
            colorChg[i].style.color = oldColor.inverseToString();
            colorChg[i].style.borderLeftColor = oldColor.inverseToString();
        }

        //Recursive call to this function set inside a setTimeout
        setTimeout(fadeToNewColor, 30);
    }
}

button.addEventListener("click", fadeToNewColor);
