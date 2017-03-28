/*jslint node: true */
'use strict';

var foo = {
    name: 'Steven',
    printName: function () {
        console.log(this.name);
    },
    pet: {
        dog: 'Brisket',
        printOwner: function (message) {
            var display = message + this.name;
            console.log(display);
        }
    }
};

// without binding
foo.pet.printOwner('I belong to ');

// with call
foo.pet.printOwner.call(foo, 'I really belong to ');

// with apply
foo.pet.printOwner.apply(foo, ['I also belong to ']);

// with bind
foo.pet.printOwner.bind(foo, 'My trustiness belongs to ')();