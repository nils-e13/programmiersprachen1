//array mit verschiedenen Farben aus denen zufällig eine ausgewählt wird
//größe soll zufälllig 60, 80, oder 120 sein

const colorR = ['#009e9e', '#cc0099', '#ff9900']
const sizeR = [70, 80, 100]

let randomColor = ''
let randomSize = ''

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function setup() {
    createCanvas(1500, 1500);
    noLoop();
}

/*function mouseClicked() {
    //character(mouseX, mouseY, randomSize, randomColor);
    ellipse(mouseX, mouseX, 10, 10);
    return false;

}*/

function draw() {
    rectMode(CENTER);
    background(60);
    const offset = 400;

    for (let i = 0; i < 3; i++) {  
        randomColor = colorR[getRandomInt(colorR.length)]
        randomSize = sizeR[getRandomInt(sizeR.length)]
        character(300+i*offset, 300, randomSize, randomColor);
        
        
    } 
}

function character (numX, numY, size, colorX){
    let skincolor = color('#bb8973');
    let eyecolor = color('#ffffff');
    let bodycolor = colorX;

    let x = numX;
    let y = numY;
    let a = size;

    BodyX = x;
    BodyY = y+180;

    eyesX = x-40;
    eyesY = y+10;

    //create head
    fill(skincolor);
    noStroke();
    rect(x, y, a+80, a+80);

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
    rect(eyesX, eyesY, a-40, a-60);
    rect(eyesX+80, eyesY, a-40, a-60);
    fill('#523d89')
    rect(eyesX+10, eyesY, a-60, a-60);
    rect(eyesX+70, eyesY, a-60, a-60);

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
    rect(BodyX, BodyY, a+80, a+120); //body

    //create Arms
    rect(BodyX+120, BodyY-60, a, a); //rightArm sleeve
    rect(BodyX-120, BodyY-60, a, a); //leftArm sleeve

    fill(skincolor);
    rect(BodyX+120, BodyY+60, a, a+80); //rightArm skin
    rect(BodyX-120, BodyY+60, a, a+80); //leftArm skin

    //create Legs
    fill('#463aa5');
    rect(BodyX+40, BodyY+220, a, a+160); //rightLeg
    rect(BodyX-40, BodyY+220, a, a+160); //leftLeg

    //create Shoes
    fill('#6b6b6b');
    rect(BodyX+40, BodyY+360, a, a-40);
    rect(BodyX-40, BodyY+360, a, a-40);
    }

