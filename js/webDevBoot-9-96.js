"use strict";

console.log("webDevBoot-9-96.js");

var i;
var answerSet = [];

console.log("\nProblem 1:");
i = -10;
while (i < 20) {
    answerSet.push(i);
    i += 1;
}
console.log(...answerSet);

answerSet = [];

console.log("\nProblem 2:");
i = 10;
while (i <= 40) {
    answerSet.push(i);
    i += 2;
}
console.log(...answerSet);

answerSet = [];

console.log("\nProblem 3:");
i = 300;
while (i <= 333) {
    if (i % 2 === 0) {
        answerSet.push(i);
    }
    i += 1;
}
console.log(...answerSet);

answerSet = [];

console.log("\nProblem 4:");
i = 5;
while (i <= 50) {
    if (i % 5 === 0 && i % 3 === 0) {
        answerSet.push(i);
    }
    i += 1;
}
console.log(...answerSet);