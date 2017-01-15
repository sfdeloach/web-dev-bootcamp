'use strict';

// Prompt user for input, convert to integer
var age = Number.parseInt(window.prompt("Enter your age"));

// If age is negative print an error message
if (age < 0) {
    console.log("Error! Age cannot be less than zero");
}

// If age is 21 print "happy 21st birthday"
if (age === 21) {
    console.log("Happy 21st birthday!");
}

// If age is odd print "your age is odd"
if ((age % 2) > 0) {
    console.log("Your age is odd!");
}

// SUPER BONUS: if age is a perfect square print "perfect square"
if (Math.pow((Math.floor(Math.sqrt(age))), 2) === age) {
    console.log("Perfect square!");
}