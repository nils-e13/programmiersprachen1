/* 
BONUS AUFGABE
Erstelle eine Funktion die grid heißt und die drei Parametern hat.
-> numX für die Anzahl an Shapes (z.B. ellipse) auf der x-Achse
-> numY für die Anzahl an Shapes auf der y-Achse
-> size für die größe der Shapes
grid(10, 30, 20); // Erstellt 10 x 30 ellipsen von der size 20px
 */

function setup() {
	createCanvas(500, 800);
}

function draw() {
	background(220);
    grid(10, 25, 20); //function call
}
//function declaration
function grid (numX, numY, size) {
	const offset = size+5;
	fill(237, 34, 93);
	noStroke();
	for (let i = 0; i<numX; i++){
		for (let j = 0; j<numY; j++){
			ellipse(i*offset+size, j*offset+size, size, size);
			
		}
	}

}