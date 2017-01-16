"use strict";

console.log("webDevBoot-9-101.js");

var answerSet = [];

console.log("\nProblem 1:");
for (var i = -10; i < 20; i += 1) {
    answerSet.push(i);
}
console.log(...answerSet);

answerSet = [];

console.log("\nProblem 2:");
for (var i = 10; i <= 40; i += 2) {
    answerSet.push(i);
}
console.log(...answerSet);

answerSet = [];

console.log("\nProblem 3:");
for (var i = 300; i <= 333; i += 1) {
    if (i % 2 === 0) {
        answerSet.push(i);
    }
}
console.log(...answerSet);

answerSet = [];

console.log("\nProblem 4:");
for (var i = 5; i <= 50; i += 1) {
    if (i % 5 === 0 && i % 3 === 0) {
        answerSet.push(i);
    }
}
console.log(...answerSet);