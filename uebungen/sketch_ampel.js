function setup() {
    createCanvas(200, 200);
}

function draw() {
    rectMode(CENTER);
    background(0);
    fill('gray');
    rect(100, 100, 50, 100);
    stroke(0); //creates a black circle for each light
    strokeWeight(2);
    ellipse(100, 70, 21);
    ellipse(100, 100, 21);
    ellipse(100, 130, 21);

        if (mouseY > 60 && mouseY < 90 && mouseX > 90 && mouseX < 110) { //fills circle with color when mouse is hovered above circle
            fill('red');
            ellipse(100, 70, 20, 20);
        }
        if (mouseY > 90 && mouseY < 120 && mouseX > 90 && mouseX < 110) {
            fill('yellow');
            ellipse(100, 100, 20, 20);
        }
        if (mouseY > 120 && mouseY < 140 && mouseX > 90 && mouseX < 110) {
            fill('green');
            ellipse(100, 130, 20, 20);
        }
}