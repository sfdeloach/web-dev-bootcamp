/*jslint node: true */
'use strict';

function counter() {
    var count = 0;
    return function () {
        return (count += 1);
    };
}

var c = counter();