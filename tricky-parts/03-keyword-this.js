/*jslint node: true */
'use strict';

var foo = {
    name: 'Steven',
    sayHello: function () {
        setTimeout(function () {
            console.log("Hello, " + this.name);
        }.bind(this), 5000);
    }
};

foo.sayHello();