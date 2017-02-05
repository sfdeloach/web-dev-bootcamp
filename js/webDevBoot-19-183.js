var color = {
    r: 0,
    g: 0,
    b: 0,
    opacity: 1.0,
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
        this.opacity = this.rn();
    },
    mix: function () {
        'use strict';
        this.randomize();
        return "rgb(" + this.r + "," + this.g + "," + this.b + "," + this.opacity + ")";
    }
};

var circle = new Path.Circle({
    center: view.center,
    radius: 10,
    fillColor: 'black'
});

var clone, theta, r = 20;

for (theta = 0, r = 20; theta <= 48 * Math.PI; theta += Math.PI / 32, r += 20 / 64) {
    var clone = circle.clone();
    clone.fillColor = color.mix();
    clone.position.x = r * Math.cos(theta) + view.center._x;
    clone.position.y = r * Math.sin(theta) + view.center._y;
}