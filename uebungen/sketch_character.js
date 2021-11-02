function setup() {
    createCanvas(1000, 1000);
}

function draw() {
    rectMode(CENTER);
    background('255')

    let skincolor = color('#bb8973');
    let eyecolor = color('#ffffff')

    eyesX = 160;
    eyesY = 210;

    //create head
    fill(skincolor);
    noStroke();
    rect(200, 200, 160, 160);

    //create eyes
    fill(eyecolor);
    noStroke();
    rect(eyesX, eyesY, 40, 20);
    rect(eyesX+80, eyesY, 40, 20);
    
    
}