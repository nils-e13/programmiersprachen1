let d = document.getElementById("demo");

//Schreibe ein arrays mit allen Namen deines Semesters: const names = []
const names = ['Tobias Heinen', 'Simon Feldmann', 'Olivia Hahn', 'Marina Beck', 'Jakob Finkenzeller', 'Florian Kiem', 'Christian Licu', 'Anton Stallbörger', 'Alice Sopp', 'Lena Dethloff', 'Nils Eller']

//Programmiere einen for-loop und gebe in jedem Durchlauf mit console.log() einen der Namen aus bis alle Namen ausgegeben wurden.
//Nutze für deine For-Schleifen Bedingung (i < x) die Länge des arrays: let x = names.length;  
let x = names.length;
for (let i=0; i<x; i++) {
    console.log(names[i]);
}