/*jslint node: true */
'use strict';

var person = {
    name: {
        first: "Steven",
        last: "DeLoach"
    },
    showName: function () {
        console.log('%s %s', this.name.first, this.name.last);
    },
    getName: function () {
        return this.name.first + " " + this.name.last;
    },
    pets: [
        {
            name: "Brisket",
            breed: "Rat Terrier"
        },
        {
            name: "Porterhouse",
            breed: "Papillon"
        },
        {
            name: "Yoda",
            breed: "Papillon"
        }
    ],
    showPets: function () {
        var owner = this.getName();
        this.pets.forEach(function (pet) {
            console.log(pet.name + " is a " + pet.breed + " and belongs to " + owner);
        });
    }
};

person.showName();
person.showPets();
