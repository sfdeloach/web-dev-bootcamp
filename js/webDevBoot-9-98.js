"use strict";

console.log("webDevBoot-9-96.js");

var usrResponse = "no";

while (usrResponse.indexOf("yes") === -1 && usrResponse.indexOf("yeah") === -1) {
    console.log(usrResponse);
    usrResponse = window.prompt("Are we there yet?");
    usrResponse = usrResponse.toLowerCase();
}

window.alert("Yay, we finally made it!");