// Create circle, x, y, radius
var myCircle = new Path.Circle(new Point(100, 70), 50);
myCircle.fillColor = 'yellow';

// Create a Paper.js Path to draw a line into it:
var line = new Path();

// Give the stroke a color
line.strokeColor = 'black';
var start = new Point(100, 100);

// Move to start and draw a line from there
line.moveTo(start);

// Note the puls operator on Point objects.
// PaperScript does that for us, and much more!
line.lineTo(start + [100, -50]);
line.lineTo(start + [100, 250]);

var rectangle = new Rectangle(new Point(400, 50), new Point(550, 100));
var path = new Path.Rectangle(rectangle);
path.fillColor = '#e9e9ff';
path.selected = true;

// Create a triangle shaped path 
var triangle = new Path.RegularPolygon(new Point(80, 500), 3, 50);
triangle.fillColor = 'limegreen';
triangle.selected = true;


var rectangle2 = new Rectangle(new Point(600, 600), new Point(700, 700));
var cornerSize = new Size(20, 20);
var path = new Path.RoundRectangle(rectangle2, cornerSize);
path.fillColor = 'red';

var myPath = new Path();
myPath.strokeColor = 'black';
myPath.add(new Point(0, 0), new Point(100, 50));

// insert a segment between the two existing
// segments in the path:
myPath.insert(1, new Point(30, 40));
myPath.insert(2, new Point(50, 20));

var path = new Path();
path.strokeColor = 'black';
path.add(new Point(400, 400));
path.add(new Point(400, 500));
path.add(new Point(500, 500));
path.add(new Point(500, 400));
path.closed = true;

// Select the path, so we can see its handles:
path.fullySelected = true;

// Create a copy of the path and move it 100pt to the right:
var copy = path.clone();
copy.fullySelected = true;
copy.position.x += 200;

// Smooth the segments of the copy:
copy.smooth();
