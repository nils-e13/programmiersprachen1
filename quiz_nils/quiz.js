//Inspiration und Tips für Variablen für dein Quiz
/* 
Aus einer Menge aus Fragen sollen im Quiz Fragen angezeigt werden, dies klingt doch Verdächtig nach einem Array.
Die Runden sollen auf 5 begrenzt sein. Dies läßt sich gut in einer Variablen namens runden festhalten.
Um die Punkte zu merken bietet sich eine Variable names punkte an, in dem wir die Punkte speichern. 
Aus drei Antworten soll eine ausgewählt werden, das wollen wir mit einem Klick überprüfen und hierzu benötigen wir eine Variable.
Zu jeder Frage gehört eine eigene richtige Antwort, daher müssen wir diese auch nocht nicht vorab belegen.
Um nach einer Eingabe alles zu sperren, damit keine weiteren Antworten Ausgewählt werden können, nutzen wir eine Variabel mit true oder false.
*/ 


let maxRounds = 5;


//Hides remaining questions
window.onload = function() {
    document.getElementById("QuestionPage").style.display = 'none';
}

//Displays Questions
function questionDisplay (question) {
    document.getElementById("question").innerHTML = question.question;
    document.getElementById("choice1").innerHTML = question.answers[0].choice;
    document.getElementById("choice2").innerHTML = question.answers[1].choice;
    document.getElementById("choice3").innerHTML = question.answers[2].choice;
}
/*function question2Display (question) {
    document.getElementById("2question").innerHTML = question.question;
    document.getElementById("2choice1").innerHTML = question.answers[0].choice;
    document.getElementById("2choice2").innerHTML = question.answers[1].choice;
    document.getElementById("2choice3").innerHTML = question.answers[2].choice;
}
function question3Display (question) {
    document.getElementById("3question").innerHTML = question.question;
    document.getElementById("3choice1").innerHTML = question.answers[0].choice;
    document.getElementById("3choice2").innerHTML = question.answers[1].choice;
    document.getElementById("3choice3").innerHTML = question.answers[2].choice;
}

function question4Display (question) {
    document.getElementById("4question").innerHTML = question.question;
    document.getElementById("4choice1").innerHTML = question.answers[0].choice;
    document.getElementById("4choice2").innerHTML = question.answers[1].choice;
    document.getElementById("4choice3").innerHTML = question.answers[2].choice;
}
function question5Display (question) {
    document.getElementById("5question").innerHTML = question.question;
    document.getElementById("5choice1").innerHTML = question.answers[0].choice;
    document.getElementById("5choice2").innerHTML = question.answers[1].choice;
    document.getElementById("5choice3").innerHTML = question.answers[2].choice;
}*/


//Start Game Button (hides Start Page and Displays Question1Page)
function StartGame () {
    questionDisplay(ShuffleFragen[0]);
    document.getElementById("home").style.display = 'none';
    document.getElementById("QuestionPage").style.display = 'block';
}

/*function showQuestion2 () {
    question2Display(ShuffleFragen[1]);
    document.getElementById("home").style.display = 'none';
    document.getElementById("Question1Page").style.display = 'none';
    document.getElementById("Question2Page").style.display = 'block';
}*/
let clicks = 1;
function showNextQuestion () {
    questionDisplay(ShuffleFragen[clicks]);
    clicks += 1;
    document.getElementById("home").style.display = 'none';
    document.getElementById("QuestionPage").style.display = 'block';

}
/*
function showQuestion3 () {
    question1Display(ShuffleFragen[2]);
    document.getElementById("home").style.display = 'none';
    document.getElementById("Question1Page").style.display = 'block';

}

function showQuestion3 () {
    question3Display(ShuffleFragen[2]);
    document.getElementById("home").style.display = 'none';
    document.getElementById("Question1Page").style.display = 'none';
    document.getElementById("Question2Page").style.display = 'none';
    document.getElementById("Question3Page").style.display = 'block';
}

function showQuestion4 () {
    question4Display(ShuffleFragen[3]);
    document.getElementById("home").style.display = 'none';
    document.getElementById("Question1Page").style.display = 'none';
    document.getElementById("Question2Page").style.display = 'none';
    document.getElementById("Question3Page").style.display = 'none';
    document.getElementById("Question4Page").style.display = 'block';
}
function showQuestion5 () {
    question5Display(ShuffleFragen[4]);
    document.getElementById("home").style.display = 'none';
    document.getElementById("Question1Page").style.display = 'none';
    document.getElementById("Question2Page").style.display = 'none';
    document.getElementById("Question3Page").style.display = 'none';
    document.getElementById("Question4Page").style.display = 'none';
    document.getElementById("Question5Page").style.display = 'block';
    question5Display(ShuffleFragen[4]);
}*/



//definiereDirFragen();
/*Aus einer Menge von Fragen sollen zufäller Reihenfolge 5 Frage aufgerufen werden, 
drei Antworten sind jeweils vorgegeben, die Fragen benötigen wir in jedem Fall, daher rufen wir die Funktion auf jeden Fall auf*/

/*let question1 = 
let question 2 = 
let question 3 = 

[question1, question2, question3]

*/

/*let questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: 
        [
        {choice1: "<javascript>", correct: false},
        {choice2: "<js>", correct: false},
        {choice3: "<script>", correct: true}
        ]
    },
    {
        question: 'How do you create a function in JavaScript',
        answers: 
        [
        {choice1: 'function = myFunction ()', correct: true},
        {choice2: 'function : myFunction ()', correct: false},
        {choice3: 'function = myFunction[]', correct: false}
        ]
    },
    {
        question: 'How does a FOR loop start',
        answers:
        [
        {choice1: 'for(0; i<=5;i++)', correct: false},
        {choice2: 'for(let i = 0;)', correct: false},
        {choice3: 'for loop = (let i= 0; i<5; i++)', correct: true}
        ]
    },
    {
        question: 'What is the correct way to write a JavaScript array',
        answers:
        [
        {choice1: 'car colors = "red", "green", "blue" ', correct: false},
        {choice2: 'const colors = (red, green, blue)', correct: false},
        {choice3: 'let colors = ["red", "green", "blue"]', correct: true}
        ]
    },
    {
        question: 'Which operator is used to assign a value to a variable',
        answers:
        [
        {choice1: '-', correct: false},
        {choice2: '=', correct: true},
        {choice3: '*', correct: false},
        ]
    }
]
*/

let question1 = {
    question: 'How do you create a function in JavaScript?',
    answers: 
    [
    {choice: 'function = myFunction ()', correct: true},
    {choice: 'function : myFunction ()', correct: false},
    {choice: 'function = myFunction[]', correct: false}
    ]
}
let question2 = {
    question: 'Inside which HTML element do we put the JavaScript',
    answers: 
    [
    {choice: '&lt;javascript&gt;', correct: true},
    {choice: '&lt;js&gt;', correct: false},
    {choice: '&lt;script&gt;', correct: false}
    ]
}

let question3 = {
    question: 'How does a FOR loop start?',
    answers: 
    [
    {choice: 'for(0; i&lt;=5;i++)', correct: false},
    {choice: 'for(let i = 0;)', correct: false},
    {choice: 'for loop = (let i= 0; i&lt;5; i++)', correct: true}
    ]
}

let question4 = {
    question: 'What is the correct way to write a JavaScript array?',
    answers: 
    [
    {choice: 'car colors = "red", "green", "blue"', correct: false},
    {choice: 'const colors = (red, green, blue)', correct: false},
    {choice: 'let colors = ["red", "green", "blue"]', correct: true}
    ]
}

let question5 = {
    question: 'Which operator is used to assign a value to a variable?',
    answers: 
    [
    {choice: '-', correct: false},
    {choice: '=', correct: true},
    {choice: '*', correct: false}
    ]
}


const Fragen = [question1, question2, question3, question4, question5]

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

  const ShuffleFragen = shuffle(Fragen);




function tippeButton(gewaehlterButton){
  
/*Ist die Antwort richtig, ist Button z.B: grün
Ist die Antwort falsch, ist Button z.B: rot
Sperre die Buttons wenn einer der Antworten geklickt wurde
Wenn eine Antwort in deinem html file ausgewählt wurde, muss dein Programm darauf reagieren
Die Funktion wird daher in deinem html file mit onclick="tippeButton(this); aufgerufen.
*/
  
}
function starteNeueRunde(){
/* Gestartet wird das Spiel über einen Klick in das obere Feld. 
Ausserdem wird jede neue Runde über einen Klick auf den "Nächste Frage" Button aufgerufen.
Dies geschieht über dein html file onclick="starteNeueRunde();
Die neue Runde Funktion überprüft auch ob die 5 Runden bereits gespielt sind.
Daher beinhaltet sie auch das hochzählen und Überprüfen deiner Variablen Runden. */

}
function definiereDirFragen(){
/*Aus einer Menge von Fragen sollen zufäller Reihenfolge 5 Frage aufgerufen werden, 
drei Antworten sind jeweils vorgegeben*/


}