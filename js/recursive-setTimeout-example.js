function checkTime(i) {
    "use strict";
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function startTime() {
    "use strict";
    var today = new Date(),
        h = today.getHours(),
        m = today.getMinutes(),
        s = today.getSeconds(); // add a zero in front of numbers<10

    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("txt").innerHTML = h + ":" + m + ":" + s;

    setTimeout(function () {
        startTime();
    },  500);
}
