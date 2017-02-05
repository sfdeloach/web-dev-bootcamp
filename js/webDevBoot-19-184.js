var haphazard = {
    r: 0,
    g: 0,
    b: 0,
    rn: function (ceiling) {
        'use strict';
        if (arguments.length === 0) {
            return Math.random();
        } else {
            return Math.round(Math.random() * ceiling);
        }
    },
    randomize: function () {
        'use strict';
        this.r = this.rn(255);
        this.g = this.rn(255);
        this.b = this.rn(255);
    },
    color: function () {
        'use strict';
        this.randomize();
        return "rgb(" + this.r + "," + this.g + "," + this.b + ")";
    }
};

var cir = new Path.Circle({
    x: 0,
    y: 0,
    radius: 0,
    fillColor: rgba(0, 0, 0, 0)
});

function onKeyDown(event) {
    // console.log(event.key);
}

function onFrame(event) {
    cir.scale(0.8);
}