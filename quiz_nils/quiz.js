//Creation of variable for each question with answers
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
    {choice: '&lt;javascript&gt;', correct: false},
    {choice: '&lt;js&gt;', correct: false},
    {choice: '&lt;script&gt;', correct: true}
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
    {choice: 'var colors = "red", "green", "blue"', correct: false},
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

//Array for set of questions
const Fragen = [question1, question2, question3, question4, question5]
//for multiple Quizes: const JSFragen = ..., const HTMLFragen = ...

//Array for normal order of Choices so it can be shuffled for a random display of choices each time
const AnswerOrder = [0,1,2]

//shuffle function
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

//Shuffles Array of question sets
const ShuffleFragen = shuffle(Fragen);
//to be able to choose between quizes:
// const ChooseShuffleFragen = [ShuffleFragen, ...ShuffleFragenHTMl, ShuffleFragenCSS]
// to implement -> ChooseShuffleFragen[0]

//shuffles order of choices
const ShuffleAnswerOrder = shuffle(AnswerOrder);


//Hides Question Page on page load
window.onload = function() {
    document.getElementById("QuestionPage").style.display = 'none';
}

//Start Game Button (hides Start Page and Displays Question1Page)
function StartGame () {
    showNextQuestion ();
    document.getElementById("home").style.display = 'none';
    document.getElementById("QuestionPage").style.display = 'block';
}

//Displays Questions
function questionDisplay (question) {
    document.getElementById("question").innerHTML = question.question;
    document.getElementById("choice1").innerHTML = question.answers[ShuffleAnswerOrder[0]].choice;
    document.getElementById("choice2").innerHTML = question.answers[ShuffleAnswerOrder[1]].choice;
    document.getElementById("choice3").innerHTML = question.answers[ShuffleAnswerOrder[2]].choice;
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


let questionCount = 0;
//function showNextQuestion (NumberofQuizinArray) {}
function showNextQuestion () {
    if (questionCount < 5) {
    questionDisplay(ShuffleFragen[questionCount]);
    //to implement choosing between quizes: questionDisplay(ChooseShuffleFragen[(NumberofQuizinArray)][questionCount])
    questionCount++;
    document.getElementById("choice-button0").classList.remove('choice-container-green');
    document.getElementById("choice-button0").classList.remove('choice-container-red');
    document.getElementById("choice-button1").classList.remove('choice-container-green');
    document.getElementById("choice-button1").classList.remove('choice-container-red');
    document.getElementById("choice-button2").classList.remove('choice-container-green');
    document.getElementById("choice-button2").classList.remove('choice-container-red');

    document.getElementById('choice1').style.pointerEvents = 'auto';
    document.getElementById('choice2').style.pointerEvents = 'auto';
    document.getElementById('choice3').style.pointerEvents = 'auto';

    document.getElementById("home").style.display = 'none';
    document.getElementById("QuestionPage").style.display = 'block';
    console.log(questionCount);
    }
    else {
        document.getElementById("QuestionPage").style.display = 'none';
    }
}


let score = 0;
//Checks Quiz Answer for Option A
function proofChoice0() {
    if (ShuffleFragen[questionCount-1].answers[ShuffleAnswerOrder[0]].correct === true) {
        document.getElementById("choice-button0").classList.add('choice-container-green');
        score++;
        document.getElementById("score").innerHTML = score;
        document.getElementById('choice2').style.pointerEvents = 'none';
        document.getElementById('choice3').style.pointerEvents = 'none';
    }
    else if (ShuffleFragen[questionCount-1].answers[ShuffleAnswerOrder[0]].correct === false) {
        document.getElementById("choice-button0").classList.add('choice-container-red');
        document.getElementById('choice2').style.pointerEvents = 'none';
        document.getElementById('choice3').style.pointerEvents = 'none';
    }
}

//Checks Quiz Answer for Option B
function proofChoice1() {
    if (ShuffleFragen[questionCount-1].answers[ShuffleAnswerOrder[1]].correct === true) {
        document.getElementById("choice-button1").classList.add('choice-container-green');
        score++;
        document.getElementById("score").innerHTML = score;
        document.getElementById('choice1').style.pointerEvents = 'none';
        document.getElementById('choice3').style.pointerEvents = 'none';
    }
    else if (ShuffleFragen[questionCount-1].answers[ShuffleAnswerOrder[1]].correct === false) {
        document.getElementById("choice-button1").classList.add('choice-container-red');
        document.getElementById('choice1').style.pointerEvents = 'none';
        document.getElementById('choice3').style.pointerEvents = 'none';
    }
}

//Checks Quiz Answer for Option C
function proofChoice2() {
    if (ShuffleFragen[questionCount-1].answers[ShuffleAnswerOrder[2]].correct === true) {
        document.getElementById("choice-button2").classList.add('choice-container-green');
        score++;
        document.getElementById("score").innerHTML = score;
        document.getElementById('choice1').style.pointerEvents = 'none';
        document.getElementById('choice2').style.pointerEvents = 'none';
    }
    else if (ShuffleFragen[questionCount-1].answers[ShuffleAnswerOrder[2]].correct === false) {
        document.getElementById("choice-button2").classList.add('choice-container-red');
        document.getElementById('choice1').style.pointerEvents = 'none';
        document.getElementById('choice2').style.pointerEvents = 'none';
    }
}

function starteNeueRunde(){
/* Gestartet wird das Spiel über einen Klick in das obere Feld. 
Ausserdem wird jede neue Runde über einen Klick auf den "Nächste Frage" Button aufgerufen.
Dies geschieht über dein html file onclick="starteNeueRunde();
Die neue Runde Funktion überprüft auch ob die 5 Runden bereits gespielt sind.
Daher beinhaltet sie auch das hochzählen und Überprüfen deiner Variablen Runden. */
}