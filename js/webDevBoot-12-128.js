"use strict";

console.log("webDevBoot-12-128.js");

/* Create an array of movie objects. Each movie should have a title, rating, 
 * and hasWatched properties. Iterate through the array and print out something
 * that looks like:
 *
 *     You have watched "In Bruges" - 5 stars
 *     You have not seen "Frozen" - 4.5 stars
 *     You have seen "Mad Max Fury Road" - 5 stars
 *     You have not seen "Les Miserables" - 3.5 stars
 */

function randomRating() {
    return Math.round(5 * Math.random());
}

var movieTitles = ["The Matrix", "Spiderman", "Star Wars - A New Hope",
                   "Secret Lives of Pets", "Con Air", "Footloose", "The Burbs",
                   "The Avengers", "Superman vs Batman", "The Green Lantern",
                   "The Goonies", "New York Minute", "Taxi", "Finding Nemo",
                   "The Matrix Revolutions", "The Matrix Reloaded", "Star Wars - The Empire Strikes Back",
                   "Star Wars - Rogue One", "Star Wars - The Return of the Jedi", "Star Wars - Attack of the Clones",
                   "Star Wars - The Phantom Menace", "Star Wars - The Force Awakens", "Star Wars - Revenge of the Sith"];

function randTitle() {
    var index = Math.floor(Math.random() * movieTitles.length);
    return movieTitles[index];
}

var movies = [
    {
        title: randTitle(),
        rating: randomRating(),
        hasWatched: randomRating() < 2.5
    }, {
        title: randTitle(),
        rating: randomRating(),
        hasWatched: randomRating() < 2.5
    }, {
        title: randTitle(),
        rating: randomRating(),
        hasWatched: randomRating() < 2.5
    }, {
        title: randTitle(),
        rating: randomRating(),
        hasWatched: randomRating() < 2.5
    }, {
        title: randTitle(),
        rating: randomRating(),
        hasWatched: randomRating() < 2.5
    }
];

function buildString(movie) {
    var watch = movie.hasWatched ? "You have watched" : "You have not seen",
        title = " \"" + movie.title + "\" - ",
        rating = movie.rating <= 1 ? movie.rating + " star" : movie.rating + " stars";
    return watch + title + rating;
}

movies.forEach(function (item) {
    console.log(buildString(item));
});