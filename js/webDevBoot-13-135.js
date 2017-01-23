console.log("webDevBoot-13-135.js");
console.log("Come up with 4 different ways to select the first <p> tag");
console.log("querySelector() - Returns the first Element within the document (using depth-first pre-order traversal of the document's nodes|by first element in document markup and iterating through sequential nodes by order of amount of child nodes) that matches the specified group of selectors.");
console.log("querySelectorAll() - Returns a list of the elements within the document (using depth-first pre-order traversal of the document's nodes) that match the specified group of selectors. The object returned is a NodeList.");
console.log("getElementById() - Returns a reference to the element by its ID; the ID is a string which can be used to identify the element; it can be established using the id attribute in HTML, or from script.");
console.log("getElementsByClassName() - Returns an array-like object of all child elements which have all of the given class names. When called on the document object, the complete document is searched, including the root node. You may also call getElementsByClassName() on any element; it will return only elements which are descendants of the specified root element with the given class names.");
console.log("getElementsByTagName() - Returns an HTMLCollection of elements with the given tag name. The complete document is searched, including the root node. The returned HTMLCollection is live, meaning that it updates itself automatically to stay in sync with the DOM tree without having to call document.getElementsByTagName() again.");

var differentWaysToSelectP = [];

differentWaysToSelectP.push(document.querySelector("p"));
differentWaysToSelectP.push(document.querySelector("#first"));
differentWaysToSelectP.push(document.querySelector(".special"));
differentWaysToSelectP.push(document.querySelectorAll("p")[0]);
differentWaysToSelectP.push(document.querySelectorAll("#first"));
differentWaysToSelectP.push(document.querySelectorAll(".special")[0]);
differentWaysToSelectP.push(document.getElementById("first"));
differentWaysToSelectP.push(document.getElementsByClassName("special")[0]);
differentWaysToSelectP.push(document.getElementsByTagName("p")[0]);

differentWaysToSelectP.forEach(function (q) {
    "use strict";
    console.log(q);
});

// Compares the elements in an array, returns true if all elements
// in the array are the same, false otherwise
function cmpArr(arr) {
    "use strict";
    var i, item = arr[0];
    for (i = 1; i < arr.length; i += 1) {
        if (item !== arr[i]) {
            console.log("cmpArr: item at index " + i + " is not same");
            console.dir(arr[i]);
            return false;
        }
        item = arr[i];
    }
    console.log("cmpArr: all " + (i - 1) + " items are the same");
    return true;
}