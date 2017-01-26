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
    reset = document.querySelector(".reset"),
    isEnabled = true;

function homePlusFn() {
    'use strict';
    homeScore.innerHTML = parseInt(homeScore.innerHTML, 10) + 1;
    if (parseInt(winScore.value, 10) <= parseInt(homeScore.innerHTML, 10)) {
        homeScore.style.backgroundColor = 'limegreen';
        disableBoard();
    }
}

function homeMinusFn() {
    'use strict';
    if (parseInt(homeScore.innerHTML, 10) > 0) {
        homeScore.innerHTML = parseInt(homeScore.innerHTML, 10) - 1;
    }
}

function awayPlusFn() {
    'use strict';
    awayScore.innerHTML = parseInt(awayScore.innerHTML, 10) + 1;
    if (parseInt(winScore.value, 10) <= parseInt(awayScore.innerHTML, 10)) {
        awayScore.style.backgroundColor = 'limegreen';
        disableBoard();
    }
}

function awayMinusFn() {
    'use strict';
    if (parseInt(awayScore.innerHTML, 10) > 0) {
        awayScore.innerHTML = parseInt(awayScore.innerHTML, 10) - 1;
    }
}

function disableBoard() {
    'use strict';
    homePlus.removeEventListener("click", homePlusFn);
    homeMinus.removeEventListener("click", homeMinusFn);
    awayPlus.removeEventListener("click", awayPlusFn);
    awayMinus.removeEventListener("click", awayMinusFn);
    isEnabled = false;
}

function enableBoard() {
    'use strict';
    homePlus.addEventListener("click", homePlusFn);
    homeMinus.addEventListener("click", homeMinusFn);
    awayPlus.addEventListener("click", awayPlusFn);
    awayMinus.addEventListener("click", awayMinusFn);
}

reset.addEventListener("click", function () {
    'use strict';
    homeScore.innerHTML = "0";
    awayScore.innerHTML = "0";
    homeScore.style.backgroundColor = '#DDD';
    awayScore.style.backgroundColor = '#DDD';
    if (!isEnabled) {
        enableBoard();
        isEnabled = true;
    }
});

enableBoard();
