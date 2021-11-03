const diameter = 30;
const offset = 15;

let xCoordinate = diameter;
let yCoordinate = diameter;

function setup() {
    createCanvas(650, 650);
    background(0);
}

function draw() {
    fill('white')
    while(yCoordinate < height) {
        circle(xCoordinate, yCoordinate, diameter);
    
        while(xCoordinate < width) {
            circle(xCoordinate, yCoordinate, diameter);
            xCoordinate = xCoordinate + diameter + offset;
    }

    xCoordinate = diameter;
    yCoordinate = yCoordinate + diameter + offset;
}
}