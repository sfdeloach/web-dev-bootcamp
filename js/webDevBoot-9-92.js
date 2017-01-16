"use strict";

console.log("Ready to ROCK!");

function getNumber(min, max) {
    return min + Math.floor(Math.random() * max);
}

//Testing the getNumber() function
//var i;
//var randomArray = [];
//for (i = 0; i < 100; i++) {
//    randomArray.push(getNumber(1, 100));
//}
//console.log("min: " + Math.max(...randomArray));
//console.log("max: " + Math.min(...randomArray));
//console.log(randomArray);

var answer = getNumber(1, 100);
var guess;
var numberOfGuesses = 0;
console.log(answer);

do {
    numberOfGuesses = numberOfGuesses + 1;
    guess = Number.parseInt(window.prompt("Enter number"));
    if (guess < answer) {
        window.alert("Too low, guess again");
    }
    if (guess > answer) {
        window.alert("Too high, guess again");
    }
} while (guess !== answer);

window.alert("You are correct!");
console.log("Number of guesses: " + numberOfGuesses);