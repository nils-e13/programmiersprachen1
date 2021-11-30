const diameter = 40
const plateCoordinates = 150
const plateDiameter = 200
const cookieAmount = 8
const minCoordinate = plateCoordinates - 0.5 * plateDiameter + diameter
const maxCoordinate = plateCoordinates + 0.5 * plateDiameter - diameter
let max = maxCoordinate;
let min = minCoordinate;
let maxNum = 10;

let randomPlaetzchen = ''
let randomColor = ''
// Zufallszahl zwischen 0 und max
/*function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
// Zufallszahl zwischen min und max
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
} */

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
  function getRandomInt(maxNum) {
    return Math.random() * maxNum;
  }

const plaetzchen = [{name:'Zimtsterne', farbe:'white'}, {name:'Vanillekipferl', farbe:'brown'}, {name:'Spitzbuben', farbe:'red'}, {name:'Kokosmakronen', farbe:'yellow'}, {name:'Butterplätzchen', farbe:'purple'}, {name:'Schokoladentatzen', farbe: 'blue'}, {name:'Mandelplätzchen', farbe:'green'}, {name: 'Lebkuchen', farbe:'pink'}, {name: 'Engelsaugen', farbe:'beige'}, {name: 'Bethmännchen', farbe:'grey'}]

let maxRounds = 10;
    //for loop to display all names
    for(let i=0; i< maxRounds; i++) {

        plaetzchenNames = plaetzchen[i].name + '' + plaetzchen[i].farbe
        document.getElementById("menu").innerHTML +=  '<br>' + plaetzchen[i].name + ' with the color ' + plaetzchen[i].farbe
    }

randomPlaetzchen = plaetzchen[getRandomInt(plaetzchen.length)]
randomColor = randomPlaetzchen.farbe;

// hier geht das Programm los:
function setup() {
    // canvas
    createCanvas(2 * plateCoordinates, 2 * plateCoordinates);
    background(0);
    // Teller
    fill(255, 255, 255)
    circle(plateCoordinates, plateCoordinates, plateDiameter)
    // Plätzchen

    //for loop für Plätzchen auf Teller
    for (let j=0; j<8; j++) {
    fill(plaetzchen[j].farbe);
    circle(getRandomArbitrary(min, max), getRandomArbitrary(min, max), diameter);
    document.getElementById("selection").innerHTML +=  plaetzchen[j].name + ' in ' + plaetzchen[j].farbe +', '
    }
}





