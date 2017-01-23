console.log("webDevBoot-13-133.js");

function changeColor() {
    "use strict";
    var i, rgbColor = [];
    for (i = 0; i < 3; i += 1) {
        rgbColor.push(Math.round(Math.random() * 255));
    }
    document.childNodes[1].childNodes[2].childNodes[3].style.color = "rgb(" + rgbColor.toString() + ")";
}

var val = 0,
    direction = "up";

function whiteBlack() {
    "use strict";
    var colVal = val + "," + val + "," + val;
    document.childNodes[1].childNodes[2].childNodes[3].style.color = "rgb(" + colVal + ")";
    if (val === 0) {
        direction = "up";
    }
    if (val === 255) {
        direction = "down";
    }
    direction === "up" ? val += 1 : val -= 1;
}

//window.setInterval(changeColor, 100);
window.setInterval(whiteBlack, 10);