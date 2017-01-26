//console.log("TODO List Exercise");
//console.log("linked to webDevBoot-14-146.html");
//console.log("created by sfdeloach on 01/26/2017");

var i, lis = document.querySelectorAll("li");

var listFns = {
    mouseOver: function () {
        'use strict';
        this.classList.add("highlight");
    },
    mouseOut: function () {
        'use strict';
        this.classList.remove("highlight");
    },
    click: function () {
        'use strict';
        this.classList.toggle("complete");
    }
};

for (i = 0; i < lis.length; i += 1) {
    lis[i].addEventListener("mouseover", listFns.mouseOver);
    lis[i].addEventListener("mouseout", listFns.mouseOut);
    lis[i].addEventListener("click", listFns.click);
}
