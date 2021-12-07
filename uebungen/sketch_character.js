function setup() {
    createCanvas(1000, 1000);
}

function draw() {
    rectMode(CENTER);
    background('255')

    let skincolor = color('#bb8973');
    let eyecolor = color('#ffffff');
    let bodycolor = color('#009e9e');

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
    vertex(x-80, y-80);
    vertex(x+80, y-80);
    vertex(x+80, y-20);
    vertex(x+60, y-20);
    vertex(x+60, y-40);
    vertex(x-60, y-40);
    vertex(x-60, y-20);
    vertex(x-80, y-20);
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
    vertex(x-40, y+40);
    vertex(x-20, y+40);
    vertex(x-20, y+60);
    vertex(x+20, y+60);
    vertex(x+20, y+40);
    vertex(x+40, y+40);
    vertex(x+40, y+80);
    vertex(x-40, y+80);
    endShape(CLOSE);

    fill('#6a4030')
    beginShape();
    vertex(x-20, y+20);
    vertex(x+20, y+20);
    vertex(x+20, y+40);
    vertex(x-20, y+40);
    endShape(CLOSE);

    //createBody
    fill(bodycolor);
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

    /*//create pattern
    fill('#009999')
    let a = 120;
    let b = 100;
    let random = Math.floor(Math.random() * 300)+80;

    while (a <= a+80 && b <=b+80) {
        rect(a, b, 40, 60);
        a = a + random;
        b = b + random;
    } */
    
    fill('#007f7f')
    let random = Math.floor(Math.random() * 40)+35;
    let a = 130;
    let b = 300;

    while (a <= 270) {
        rect(a, b, 20, 40);
        
            while (b<= 450) {
                rect(a,b, 20, 40);
                b = b+random;
            }
        b = 300;
        a = a+random;
        

    /*
    for (let a=130 && let b= 300; a <= Math.floor(Math.random() * 40)+35; a += random);
        rect(a,b,20,40);
        {
        for(let a=130 && let b =300; b<=Math.floor(Math.random() * 40)+35;b+=random):
        rect(a,b,20,40);
        }
        */
            
    }

    
}
