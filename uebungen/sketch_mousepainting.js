function setup() {
    createCanvas(500, 500);
    background(0);
}

function draw() {
    rectMode(CENTER);
    fill ('red');
    rect(100, 100, 80, 50);

    fill('blue');
    rect(250, 100, 80, 50);

    fill('green');
    rect(400, 100, 80, 50);

    fill('white');
    rect(250, 400, 80, 50);


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

  if (mouseIsPressed && mouseY > 125) {
    circle(mouseX, mouseY, 25);
  }
}