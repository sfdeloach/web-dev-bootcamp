//console.log("Event Demo");
//console.log("linked to webDevBoot-14-142.html");
//console.log("created by sfdeloach on 01/23/2017");

var toggleStrike = function () {
    "use strict";
    if (this.style.textDecoration.length === 0) {
        this.style.textDecoration = "line-through";
        //console.log("strike " + this.innerText);
    } else {
        this.style.textDecoration = "";
        //console.log("unstrike " + this.innerText);
    }
    return;
};

(function assignListeners() {
    "use strict";
    var i, listItems = document.querySelectorAll("li");
    for (i = 0; i < listItems.length; i += 1) {
        listItems[i].addEventListener("click", toggleStrike);
    }
}());
