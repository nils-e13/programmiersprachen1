//array mit Vornamen
const Vornamen = ['Nico', 'Dave', 'Michael', 'Max', 'Phil', 'Andrea', 'Marie', 'Sonja', 'Sophia', 'Alexandra']

//array mit Nachnamen
const Nachnamen = ['Mayer', 'Müller', 'Bauer', 'Schmidt', 'Becker']

//Rundenzahl
let maxRounds = 2;

//Variablen um Random Name zwischenzuspeichern
let randomVorname = ''
let randomNachname = ''

//Objekte für 3 Personen
let person1 = { 
    firstName: randomVorname,
    lastName: randomNachname,
};

let person2 = {
    firstName: randomVorname,
    lastName: randomNachname,
};

let person3 = {
    firstName: randomVorname,
    lastName: randomNachname,
}; 

// Zufallsgenerator
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

for (i=0; i<=maxRounds; i++) {

    //zufälligen Vornamen wählen
    randomVorname = Vornamen[getRandomInt(Vornamen.length)]

    //zufälligen Nachnamen wählen
    randomNachname = Nachnamen[getRandomInt(Nachnamen.length)]

    personName = randomVorname + ' ' + randomNachname
    document.getElementById("demo").innerHTML +=  '<br>' + personName
}

//if Abfrage gleicher Nachname Verwandschaft
if (person1.lastName === person2.lastName) {
    document.getElementById("demo").innerHTML += '<br>' + person1 + 'ist verwandt mit' + person2;
}

else if (person1.lastName === person3.lastName) {
    document.getElementById("demo").innerHTML += '<br>' + person1 + 'ist verwandt mit' + person3;
}

else if (person2.lastName === person3.lastName) {
    document.getElementById("demo").innerHTML += '<br>' + person2 + 'ist verwandt mit' + person3;
}

else if (person1.lastName === person2.lastName === person3.lastName) {
    document.getElementById("demo").innerHTML += '<br>' + person1 + ', ' + person2 + ', ' + person3 + ' sind miteinander verwandt';
}


