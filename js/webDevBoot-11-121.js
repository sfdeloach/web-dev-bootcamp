"use strict";

console.log("webDevBoot-11-121.js");

// Arrays created for testing purposes

var backwardsArray = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
var alphaArray = ["apples", "peas", "carrots", "bananas"];
var numArray = [3, 7, 1, 0, 102, -34, 2, 8, 8, -35];
var uniArray = ["same", "same", "same", "same", "same", "same"];
var almostUniArray = ["same", "same", "same", "not same", "same", "same"];
var mixedArray = ["letters", 4, "chars", 5.23];

var arrayOfArrays = [backwardsArray, alphaArray, numArray, uniArray, almostUniArray, mixedArray];
console.log(arrayOfArrays);


/* printReverse()
 *
 * Write a function printReverse() that takes an array as an argument and
 * prints out the elements in the array in reverse order (do no actually 
 * reverse the array itself)
 */

function printReverse(arr) {
    for (var i = arr.length - 1; i >= 0; i -= 1) {
        console.log(arr[i]);
    }
    return;
}

/* isUniform()
 *
 * Write a function isUniform() which takes an array as an argument and
 * returns true if all elements in the array are identical
 */

function isUniform(arr) {
    var firstItem = arr[0];
    var result = true;
    arr.forEach(function (item, index, array) {
        if (firstItem !== item) {
            result = false;
            return;
        }
        firstItem = item;
    });
    return result;
}

/* sumArray()
 *
 * Write a function <code>sumArray()</code> that accepts an array of
 * numbers and returns the sum of all numbers in the array
 *
 * I have purposely written this function to be a little confusing by
 * defining an anonymous function that tests each item in the array
 * to see if it is a number, this is then used in a ternary statement
 */

function sumArray(arr) {
    var sum = 0;
    arr.forEach(function (item, index, array) {
        (function (n) {
            return !isNaN(parseFloat(n)) && isFinite(n);
        }(item)) ? sum += item: sum = sum;
    });
    return sum;
}

/* max()
 *
 * Write a function max() that accepts an array of numbers and returns
 * the maximum number in the array
 */

function max(arr) {
    var maxNum = -Infinity;
    arr.forEach(function (item, index, array) {
        item > maxNum ? maxNum = item : maxNum = maxNum;
    });
    return maxNum === -Infinity ? undefined : maxNum;
}
