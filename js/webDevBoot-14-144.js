//console.log("Scoreboard Exercise");
//console.log("linked to webDevBoot-14-144.html");
//console.log("created by sfdeloach on 01/25/2017");

var homeScore = document.querySelector(".home-score"),
    awayScore = document.querySelector(".away-score"),
    homePlus = document.querySelector(".home-plus"),
    homeMinus = document.querySelector(".home-minus"),
    awayPlus = document.querySelector(".away-plus"),
    awayMinus = document.querySelector(".away-minus"),
    winScore = document.querySelector("input"),
    reset = document.querySelector(".btn-danger");

homePlus.addEventListener("click", function () {
    'use strict';
    homeScore.innerHTML = parseInt(homeScore.innerHTML, 10) + 1;
    if (winScore.value === homeScore.innerHTML) {
        console.log("winner");
    }
});

homeMinus.addEventListener("click", function () {
    'use strict';
    homeScore.innerHTML = parseInt(homeScore.innerHTML, 10) - 1;
});

awayPlus.addEventListener("click", function () {
    'use strict';
    awayScore.innerHTML = parseInt(awayScore.innerHTML, 10) + 1;
    if (winScore.value === awayScore.innerHTML) {
        console.log("winner");
    }
});

awayMinus.addEventListener("click", function () {
    'use strict';
    awayScore.innerHTML = parseInt(awayScore.innerHTML, 10) - 1;
});

reset.addEventListener("click", function () {
    'use strict';
    homeScore.innerHTML = "0";
    awayScore.innerHTML = "0";
});