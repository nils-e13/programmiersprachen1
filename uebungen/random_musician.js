// array mit artikeln
const articles = [ {name: 'Der', plural: false}, {name: 'Die', plural: false}, {name: 'Das', plural: false}, {name:'Die', plural: true}]

// array mit adjektiven
const adjectives = ['bös', 'wild','verrückt', 'gruselig']

// array mit nomen für jeden artikel ein array
const derNouns = ['Onkel', 'Bär', 'Sturm']
const dieNouns = ['Tante', 'Katze', 'Sonne']
const dasNouns = ['Haus', 'Huhn', 'Unwetter']
const pluralNouns = ['Zombies', 'Hunde', 'Blitze']

// Rundenanzahl
let maxRounds = 10

// variablen zum zwischenspeichern
let randomArticle = {}
let randomAdj = ''
let randomNoun = ''
let musicianName = ''

// Zufallsgenerator
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// schleife
for(i=0; i<=maxRounds; i++) {

// zufälligen artikeln wählen:
randomArticle = articles[getRandomInt(articles.length)]

// zufälliges adjektiv wählen
randomAdj = adjectives[getRandomInt(adjectives.length)]

// if-Abfragen zum artikel überprüfen
if (randomArticle.name === 'Der') {
  randomNoun = derNouns[getRandomInt(derNouns.length)]
  randomAdj = randomAdj+'e';
} else if (randomArticle.name === 'Die' && randomArticle.plural === false) {
    randomNoun = dieNouns[getRandomInt(dieNouns.length)]
    randomAdj = randomAdj+'e';
} else if (randomArticle.name === 'Das') {
    randomNoun = dasNouns[getRandomInt(dasNouns.length)]
    randomAdj = randomAdj+'e';
} else if(randomArticle.name === 'Die' && randomArticle.plural === true) {
    randomNoun = pluralNouns[getRandomInt(pluralNouns.length)]
    randomAdj = randomAdj+'en';
}

// adjektiv angleichen
// namen zusammensetzen
musicianName = randomArticle.name + ' ' + randomAdj + ' ' + randomNoun
document.getElementById("demo").innerHTML +=  '<br>' + musicianName 
}





