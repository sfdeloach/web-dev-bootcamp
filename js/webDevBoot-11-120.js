"use strict";

console.log("webDevBoot-11-120.js");

var todoArray = [];

do {
    var usrResp = window.prompt("What would you like to do?");

    switch (usrResp) {
        case 'new':
            var len = todoArray.push(window.prompt("Enter a new TODO"));
            console.log("'" + todoArray[len - 1] + "' added to list");
            break;
        case 'delete':
            var index = window.prompt("Enter the index of the TODO to remove");
            console.log("Removing item '" + todoArray[index] + "' at index [" + index + "]");
            todoArray.splice(index, 1);
            break;
        case 'list':
            console.log("*********************");
            console.log("TODO List:");
            todoArray.forEach(function (item, index, array) {
                console.log("[" + index + "] " + item);
            });
            console.log("*********************");
            break;
        case 'quit':
            break;
        case 'exit':
        case 'q':
            usrResp = "quit";
            break;
        default:
            console.log("Command not recognized! Try one of the following:");
            console.log("  'new'");
            console.log("  'delete'");
            console.log("  'list'");
            console.log("  'quit'");
    }

} while (usrResp !== "quit");

console.log("Normal application exit");
