function setup() {
    createCanvas(1000, 1000);
}

function draw() {
    rectMode(CENTER);
    background('255')

    let skincolor = color('#bb8973');
    let eyecolor = color('#ffffff')

    let x = 200;
    let y = 200;

    BodyX = x;
    BodyY = y+180;

    eyesX = x-40;
    eyesY = y+10;

    //create head
    fill(skincolor);
    noStroke();
    rect(x, y, 160, 160);

    //create hair
    fill('#332411');
    beginShape();
    vertex(120, 120);
    vertex(280, 120);
    vertex(280, 180);
    vertex(260, 180);
    vertex(260, 160);
    vertex(140, 160);
    vertex(140, 180);
    vertex(120, 180);
    endShape(CLOSE);

    //create eyes
    fill(eyecolor);
    noStroke();
    rect(eyesX, eyesY, 40, 20);
    rect(eyesX+80, eyesY, 40, 20);
    fill('#523d89')
    rect(eyesX+10, eyesY, 20, 20);
    rect(eyesX+70, eyesY, 20, 20);

    //create mouth
    fill('#45220e')
    beginShape();
    vertex(160, 240);
    vertex(180, 240);
    vertex(180, 260);
    vertex(220, 260);
    vertex(220, 240);
    vertex(240, 240);
    vertex(240, 280);
    vertex(160, 280);
    endShape(CLOSE);

    fill('#6a4030')
    beginShape();
    vertex(180, 220);
    vertex(220, 220);
    vertex(220, 240);
    vertex(180, 240);
    endShape(CLOSE);

    //createBody
    fill('#009e9e')
    rect(BodyX, BodyY, 160, 200); //body

    //create Arms
    rect(BodyX+120, BodyY-60, 80, 80); //rightArm sleeve
    rect(BodyX-120, BodyY-60, 80, 80); //leftArm sleeve

    fill(skincolor);
    rect(BodyX+120, BodyY+60, 80, 160); //rightArm skin
    rect(BodyX-120, BodyY+60, 80, 160); //leftArm skin

    //create Legs
    fill('#463aa5');
    rect(BodyX+40, BodyY+220, 80, 240); //rightLeg
    rect(BodyX-40, BodyY+220, 80, 240); //leftLeg

    //create Shoes
    fill('#6b6b6b');
    rect(BodyX+40, BodyY+360, 80, 40);
    rect(BodyX-40, BodyY+360, 80, 40);
    
}
