
function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
  stroke(255);
}

function draw() {
  background(0); 
  rectMode(CENTER);
  noCursor();
  rect(mouseX, mouseY, 100, 10); // ellipse follows mouse. Will change to track light
}


////send an "l" while mouseX is decreasing
// while (mouseX > 0){

// }


////send an "d" while mouseX is decreasing
