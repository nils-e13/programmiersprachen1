function setup() {
    createCanvas(500, 500);
    background(0);
}

function draw() {
  if (mouseX < 60) {
    fill('white')
  }
  if (mouseX > 60) {
    fill('red');
  }
  if (mouseX > 140) {
    fill('white');
  }
  if (mouseX > 210) {
      fill('blue');
  }
  if (mouseX > 290) {
      fill('white');
  }
  if (mouseX > 360) {
      fill('green');
  }
  if (mouseX > 440) {
      fill('white');
  }
  
  if (mouseIsPressed && mouseY > 360 && mouseY < 440 && mouseX > 225 && mouseX < 275) {
    background(0);
  }
  if (mouseIsPressed && mouseY > 125) {
    circle(mouseX, mouseY, 25);
  }

    rectMode(CENTER);
    fill ('red');
    rect(100, 100, 80, 50);

    fill('blue');
    rect(250, 100, 80, 50);

    fill('green');
    rect(400, 100, 80, 50);

    fill('white');
    rect(250, 400, 80, 50);

    fill(255);
    textSize(15);
    textFont('Helvetica');
    text('Red', 85, 105);
    text('Blue', 235, 105);
    text('Green',380, 105);
    fill(0);
    textSize(15);
    textFont('Helvetica');
    text('Reset',230, 405);
}