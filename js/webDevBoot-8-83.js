(function () {
    'use strict';

    // Ask for the user's first name
    var firstName = window.prompt("First name:", "Nunya");

    // Ask for the user's last name
    var lastName = window.prompt("Last name:", "Business");

    // Ask for the user's age
    var userAge = window.prompt("Age:", "40");

    // Print out the user's full name in a sentence
    console.log("Name: " + firstName + " " + lastName);

    // Print out the user's age in a sentence
    console.log("Age: " + userAge);
}());