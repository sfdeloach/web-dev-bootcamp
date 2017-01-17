"use strict";

console.log("webDevBoot-10-108.js");

// isEven()
function isEven(x) {
    return x % 2 === 0;
}

// factorial()
function factorial(x) {
    if (x === 0) {
        return 1;
    } else {
        return x * factorial(x - 1);
    }
}

// kebabToSnake()
function kebabToSnake(str) {
    return str.replace(/-/g, "_");
}

console.log("isEven(10) = " + isEven(10));
console.log("isEven(101) = " + isEven(101));
console.log("isEven(Infinity) = " + isEven(Infinity));
console.log("isEven(NaN) = " + isEven(NaN));
console.log("isEven(undefined) = " + isEven(undefined));
console.log("factorial(0) = " + factorial(0));
console.log("factorial(1) = " + factorial(1));
console.log("factorial(2) = " + factorial(2));
console.log("factorial(6) = " + factorial(6));
console.log("factorial(10) = " + factorial(10));
console.log("kebabToSnake('camelCase') = " + kebabToSnake('camelCase'));
console.log("kebabToSnake('kebab-case-with-more-than-one-word') = " + kebabToSnake('kebab-case-with-more-than-one-word'));
console.log("kebabToSnake('snake_case') = " + kebabToSnake('snake_case'));