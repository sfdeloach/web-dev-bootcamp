"use strict";

console.log("webDevBoot-11-123.js");

/* anArray.forEach(function (item, index, array) {
 *     <function goes here>
 * });
 */

/* Stand-alone function
 * 
 * This is not a method associated with an object, therefore, the array
 * that is traversed shall be provided as the first argument to the function.
 *
 * arr - The array that will be traversed
 * fun - the function that will be applied to each item in the array
 */

function myForEach(arr, fun) {
    for (var i = 0; i < arr.length; i += 1) {
        fun(arr[i], i, arr);
    }
}

// array for testing
var numArray = [1, 3, 5, 7, 9];

// testing myForEach to sum all the items in an array
var sum = 0;

myForEach(numArray, function (item, index, array) {
    sum += item;
    console.log("sum, item, index, array = " + sum + ", " + item + ", " + index + ", [" + array + "]");
});

console.log("sum = " + sum);

// Adding a method to the Array prototype, need to redefine myForEach() so that it references 'this', then the array argument can be removed

Array.prototype.myForEach = function (fun) {
    for (var i = 0; i < this.length; i += 1) {
        fun(this[i], i, this);
    }
};

function consoleArrayThrow(item, index) {
    console.log("[" + index + "] = " + item);
}
