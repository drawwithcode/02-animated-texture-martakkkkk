var maxCount = 1000;
var currentCount = 1;
var x = [];
var y = [];
var r = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  bg = loadImage("foresta.PNG");
}

function draw() {
  background(bg);

  x[0] = width / 2;
  y[0] = height / 2;
  r[0] = 20;

  var newR = random(10, 20);
  var newX = random(newR, width - newR);
  var newY = random(newR, height - newR);

  var closestDist = Number.MAX_VALUE;
  var closestIndex = 0;

  for (var i = 0; i < currentCount; i++) {
    var newDist = dist(newX, newY, x[i], y[i]);
    if (newDist < closestDist) {
      closestDist = newDist;
      closestIndex = i;
    }
  }
  var angle = atan2(newY - y[closestIndex], newX - x[closestIndex]);

  x[currentCount] = x[closestIndex] + cos(angle) * (r[closestIndex] + newR);
  y[currentCount] = y[closestIndex] + sin(angle) * (r[closestIndex] + newR);
  r[currentCount] = newR;
  currentCount++;

  for (var i = 0; i < currentCount; i++) {
    noFill();
    stroke("black");
    strokeWeight(3);
    ellipse(x[i], y[i], r[i] * 2, r[i] * 2);
  }

  if (currentCount >= maxCount) noLoop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
