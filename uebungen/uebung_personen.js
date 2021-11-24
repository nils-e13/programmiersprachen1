//array mit Vornamen
const Vornamen = ['Nico', 'Dave', 'Michael', 'Max', 'Phil', 'Andrea', 'Marie', 'Sonja', 'Sophia', 'Alexandra']

//array mit Nachnamen
const Nachnamen = ['Mayer', 'Müller', 'Bauer', 'Schmidt', 'Becker']

// Zufallsgenerator
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

//Objekte für 3 Personen
let person1 = { 
    firstName: randomVorname = Vornamen[getRandomInt(Vornamen.length)],
    lastName: randomNachname = Nachnamen[getRandomInt(Nachnamen.length)],
};

let person2 = {
    firstName: randomVorname = Vornamen[getRandomInt(Vornamen.length)],
    lastName: randomNachname = Nachnamen[getRandomInt(Nachnamen.length)],
};

let person3 = {
    firstName: randomVorname = Vornamen[getRandomInt(Vornamen.length)],
    lastName: randomNachname = Nachnamen[getRandomInt(Nachnamen.length)],
}; 

person1Name = person1.firstName + ' ' + person1.lastName
person2Name = person2.firstName + ' ' + person2.lastName
person3Name = person3.firstName + ' ' + person3.lastName


document.getElementById("demo").innerHTML +=  '<br>' + person1Name + '<br>' + person2Name + '<br>' + person3Name

/*for (i=0; i<=maxRounds; i++) {

    //zufälligen Vornamen wählen
    randomVorname = Vornamen[getRandomInt(Vornamen.length)]

    //zufälligen Nachnamen wählen
    randomNachname = Nachnamen[getRandomInt(Nachnamen.length)]

    personName = randomVorname + ' ' + randomNachname
    document.getElementById("demo").innerHTML +=  '<br>' + personName
} */

document.getElementById("demo").innerHTML += '<br>'

//if Abfrage gleicher Nachname Verwandschaft
if (person1.lastName === person2.lastName) {
    document.getElementById("demo").innerHTML += '<br>' + person1Name + ' ist verwandt mit ' + person2Name;
}

else if (person1.lastName === person3.lastName) {
    document.getElementById("demo").innerHTML += '<br>' + person1Name + ' ist verwandt mit ' + person3Name;
}

else if (person2.lastName === person3.lastName) {
    document.getElementById("demo").innerHTML += '<br>' + person2Name + ' ist verwandt mit ' + person3Name;
}

else if (person1.lastName === person2.lastName === person3.lastName) {
    document.getElementById("demo").innerHTML += '<br>' + person1Name + ', ' + person2Name + ', ' + person3Name + ' sind miteinander verwandt';
}

else {
    document.getElementById("demo").innerHTML += '<br>' + 'Niemand ist verwandt';
}


