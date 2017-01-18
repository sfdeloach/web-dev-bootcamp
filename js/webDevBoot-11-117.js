"use strict";

console.log("webDevBoot-11-117.js");

var usrResp;
var todoArray = [];

do {
usrResp = window.prompt("What would you like to do?");

switch (usrResp) {
    case 'new':
        todoArray.push(window.prompt("Enter a new TODO"));
        break;
    case 'list':
        console.log(todoArray);
        window.alert(todoArray);
        break;
    case 'quit':
        break;
    default:
        console.log("Command not recognized!");
}

} while (usrResp !== "quit");
