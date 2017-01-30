//console.log("Color Game");
//console.log("linked to webDevBoot-15-150.html");
//console.log("created by sfdeloach on 01/26/2017");

// Object Constructor - Used to randomly create colors in RGB format
function RgbColor(r, g, b) {
    'use strict';
    //random number generator from 0 to 255
    this.rn = function () {
        return Math.round(Math.random() * 255);
    };
    //the three main properties of the object
    this.r = this.rn();
    this.g = this.rn();
    this.b = this.rn();
    //provides an array representation of the object
    this.toArray = function () {
        var a = [];
        a.push(this.r);
        a.push(this.g);
        a.push(this.b);
        return a;
    };
    //provides a CSS-formatted string representing the color
    this.toString = function () {
        return 'rgb(' + this.toArray() + ')';
    };
}

// Variables
var rgbTitle = document.querySelector("#rgb-title"),
    newColors = document.querySelector("#new-colors"),
    easy = document.querySelector("#easy"),
    hard = document.querySelector("#hard"),
    colorBoxes = document.querySelectorAll(".color-square"),
    gameOver = document.querySelectorAll(".game-over"),
    guessColorIndex, //assigned during generateColors()
    gameIsActive = true,
    numColors = 6;

// Function definitions
function resetGame() {
    'use strict';
    //generate random colors and assign to squares
    var i, colorArray = [];
    for (i = 0; i < numColors; i += 1) {
        colorArray.push(new RgbColor());
    }
    for (i = 0; i < numColors; i += 1) {
        colorBoxes[i].style.backgroundColor = colorArray[i].toString();
        colorBoxes[i].innerHTML = '<i class="fa fa-question-circle-o fa-3x" aria-hidden="true"></i>';
    }
    //randomly select one color and print to rgbTitle
    guessColorIndex = Math.round(Math.random() * (numColors - 1));
    rgbTitle.innerHTML = colorBoxes[guessColorIndex].style.backgroundColor;
    gameIsActive = true;
    gameOver[0].innerHTML = "";
    gameOver[1].innerHTML = "";
    document.querySelector(".title").style.backgroundColor = "";
    easy.style.backgroundColor = "";
    hard.style.backgroundColor = "";
}

// Initializing function: add listeners via one large anonymous function invocation
(function () {
    'use strict';
    var i; //for iteration
    easy.addEventListener("mouseover", function () {
        this.classList.add("emphasize");
    });
    easy.addEventListener("mouseout", function () {
        this.classList.remove("emphasize");
    });
    hard.addEventListener("mouseover", function () {
        this.classList.add("emphasize");
    });
    hard.addEventListener("mouseout", function () {
        this.classList.remove("emphasize");
    });
    newColors.addEventListener("mouseover", function () {
        this.classList.add("emphasize");
    });
    newColors.addEventListener("mouseout", function () {
        this.classList.remove("emphasize");
    });
    easy.addEventListener("click", function () {
        this.classList.add("select");
        hard.classList.remove("select");
        numColors = 3;
        // hide last three squares
        for (i = 3; i < 6; i += 1) {
            colorBoxes[i].classList.remove("color-square");
            colorBoxes[i].classList.add("hidden-square");
            colorBoxes[i].innerHTML = "";
        }
        resetGame();
    });
    hard.addEventListener("click", function () {
        this.classList.add("select");
        easy.classList.remove("select");
        numColors = 6;
        // show last three squares
        for (i = 3; i < 6; i += 1) {
            colorBoxes[i].classList.remove("hidden-square");
            colorBoxes[i].classList.add("color-square");
        }
        resetGame();
    });
    newColors.addEventListener("click", function () {
        resetGame();
    });
    //assign listener for colorSquares
    for (i = 0; i < numColors; i += 1) {
        colorBoxes[i].addEventListener("click", function () {
            if (gameIsActive) {
                if (this.style.backgroundColor === rgbTitle.innerHTML) {
                    this.innerHTML = '<i class="fa fa-check fa-3x" aria-hidden="true"></i>';
                    gameIsActive = false; //game over
                    gameOver[0].innerHTML = '<i class="fa fa-star fa-spin fa-3x fa-fw"></i>';
                    gameOver[1].innerHTML = '<i class="fa fa-star fa-spin fa-3x fa-fw"></i>';
                    document.querySelector(".title").style.backgroundColor = this.style.backgroundColor;
                    document.querySelector(".select").style.backgroundColor = this.style.backgroundColor;
                } else {
                    this.innerHTML = '<i class="fa fa-times fa-3x" aria-hidden="true"></i>';
                }
            }
        });
    }
}());

resetGame();
