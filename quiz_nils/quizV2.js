//Creation of variable for each question with answers
let JSquestion1 = {
    question: 'How do you create a function in JavaScript?',
    answers: 
    [
    {choice: 'function = myFunction ()', correct: true},
    {choice: 'function : myFunction ()', correct: false},
    {choice: 'function = myFunction[]', correct: false}
    ]
}

let JSquestion2 = {
    question: 'Inside which HTML element do we put the JavaScript',
    answers: 
    [
    {choice: '&lt;javascript&gt;', correct: false},
    {choice: '&lt;js&gt;', correct: false},
    {choice: '&lt;script&gt;', correct: true}
    ]
}

let JSquestion3 = {
    question: 'How does a FOR loop start?',
    answers: 
    [
    {choice: 'for(0; i&lt;=5;i++)', correct: false},
    {choice: 'for(let i = 0;)', correct: false},
    {choice: 'for loop = (let i= 0; i&lt;5; i++)', correct: true}
    ]
}

let JSquestion4 = {
    question: 'What is the correct way to write a JavaScript array?',
    answers: 
    [
    {choice: 'var colors = "red", "green", "blue"', correct: false},
    {choice: 'const colors = (red, green, blue)', correct: false},
    {choice: 'let colors = ["red", "green", "blue"]', correct: true}
    ]
}

let JSquestion5 = {
    question: 'Which operator is used to assign a value to a variable?',
    answers: 
    [
    {choice: '-', correct: false},
    {choice: '=', correct: true},
    {choice: '*', correct: false}
    ]
}

let JSquestion6 = {
    question: 'How do you comment in JavaScript?',
    answers: 
    [
    {choice: '&lt;!--comment--&gt;', correct: false},
    {choice: '//comment', correct: true},
    {choice: '#comment', correct: false}
    ]
}

let JSquestion7 = {
    question: 'How do you write an object in JavaScript?',
    answers: 
    [
    {choice: '{let object = brand:"Porsche", name:"Taycan"}', correct: false},
    {choice: 'const car = {brand:"Porsche",name:"Taycan"}', correct: true},
    {choice: 'const car = [brand:"Porsche", name:"Taycan"]', correct: false}
    ]
}

let HTMLquestion1 = {
    question: 'Which is the correct HTML element for the largest heading?',
    answers: 
    [
    {choice: '&lt;h6&gt;', correct: false},
    {choice: '&lt;h1&gt;', correct: true},
    {choice: '&lt;heading&gt;', correct: false}
    ]
}

let HTMLquestion2 = {
    question: 'What do we write at the beginning of a HTML document?',
    answers: 
    [
    {choice: '&lt;meta charset="utf-8"/&gt;', correct: false},
    {choice: '&lt;!DOCTYPE html&gt;', correct: true},
    {choice: '&lt;html&gt;', correct: false}
    ]
}

let HTMLquestion3 = {
    question: 'Which character is used to indicate an end tag?',
    answers: 
    [
    {choice: '&gt;', correct: false},
    {choice: '/', correct: true},
    {choice: '&lt;', correct: false}
    ]
}

let HTMLquestion4 = {
    question: 'With which tag does an ordered list start?',
    answers: 
    [
    {choice: '&lt;ul&gt;', correct: false},
    {choice: '&lt;ol&gt;', correct: true},
    {choice: '&lt;li&gt;', correct: false}
    ]
}

let HTMLquestion5 = {
    question: 'What is the correct HTML for inserting an image?',
    answers: 
    [
    {choice: '&lt;img href="image.jpg" alt="Image"&gt;', correct: false},
    {choice: '&lt;img src="image.jpg" alt="Image"&gt;', correct: true},
    {choice: '&lt;image src="image.jpg" alt="Image"&gt;', correct: false}
    ]
}

//Array for set of questions
const JSFragen = [JSquestion1, JSquestion2, JSquestion3, JSquestion4, JSquestion5, JSquestion6, JSquestion7];
const HTMLFragen = [HTMLquestion1, HTMLquestion2, HTMLquestion3, HTMLquestion4, HTMLquestion5]
const CSSFragen = []
//for multiple Quizes: const JSFragen = ..., const HTMLFragen = ...

//Array for normal order of Choices so it can be shuffled for a random display of choices each time
const AnswerOrder = [0,1,2];

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
const Shuffle_JSFragen = shuffle(JSFragen);
const Shuffle_HTMLFragen = shuffle(HTMLFragen);
const Shuffle_CSSFragen = shuffle(CSSFragen);

const ChooseShuffleFragen = [Shuffle_JSFragen, Shuffle_HTMLFragen, Shuffle_CSSFragen];
//to be able to choose between quizes:
// const ChooseShuffleFragen = [ShuffleFragen, ...ShuffleFragenHTMl, ShuffleFragenCSS]
// to implement -> ChooseShuffleFragen[0]

//shuffles order of choices
const ShuffleAnswerOrder = shuffle(AnswerOrder);


//Hides Question Page on page load
window.onload = function() {
    document.getElementById("QuestionPage").style.display = 'none';
    document.getElementById("EndPage").style.display = 'none';
}

//Start Game Button (hides Start Page and Displays Question1Page)
let NumberofQuizinArrayPublic = null;

function StartQuiz (NumberQuiz) {
    NumberofQuizinArrayPublic = NumberQuiz;
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

let questionCount = 0;
//function showNextQuestion (NumberofQuizinArray) {}
function showNextQuestion () {
    if (questionCount < 5) {
    questionDisplay(ChooseShuffleFragen[NumberofQuizinArrayPublic][questionCount]);
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
    }
    else {
        document.getElementById("scoreFinal").innerHTML = score;
        //questionCount = 0;
        document.getElementById("QuestionPage").style.display = 'none';
        document.getElementById("EndPage").style.display = 'block';
        console.log(score);
    }
}

let score = 0;
//Checks Quiz Answer for Option A
function proofChoice0() {
    if (ChooseShuffleFragen[NumberofQuizinArrayPublic][questionCount-1].answers[ShuffleAnswerOrder[0]].correct === true) {
        document.getElementById("choice-button0").classList.add('choice-container-green');
        score++;
        document.getElementById("score").innerHTML = score;
        document.getElementById('choice2').style.pointerEvents = 'none';
        document.getElementById('choice3').style.pointerEvents = 'none';
    }
    else if (ChooseShuffleFragen[NumberofQuizinArrayPublic][questionCount-1].answers[ShuffleAnswerOrder[0]].correct === false) {
        document.getElementById("choice-button0").classList.add('choice-container-red');
        document.getElementById('choice2').style.pointerEvents = 'none';
        document.getElementById('choice3').style.pointerEvents = 'none';
    }
}

//Checks Quiz Answer for Option B
function proofChoice1() {
    if (ChooseShuffleFragen[NumberofQuizinArrayPublic][questionCount-1].answers[ShuffleAnswerOrder[1]].correct === true) {
        document.getElementById("choice-button1").classList.add('choice-container-green');
        score++;
        document.getElementById("score").innerHTML = score;
        document.getElementById('choice1').style.pointerEvents = 'none';
        document.getElementById('choice3').style.pointerEvents = 'none';
    }
    else if (ChooseShuffleFragen[NumberofQuizinArrayPublic][questionCount-1].answers[ShuffleAnswerOrder[1]].correct === false) {
        document.getElementById("choice-button1").classList.add('choice-container-red');
        document.getElementById('choice1').style.pointerEvents = 'none';
        document.getElementById('choice3').style.pointerEvents = 'none';
    }
}

//Checks Quiz Answer for Option C
function proofChoice2() {
    if (ChooseShuffleFragen[NumberofQuizinArrayPublic][questionCount-1].answers[ShuffleAnswerOrder[2]].correct === true) {
        document.getElementById("choice-button2").classList.add('choice-container-green');
        score++;
        document.getElementById("score").innerHTML = score;
        document.getElementById('choice1').style.pointerEvents = 'none';
        document.getElementById('choice2').style.pointerEvents = 'none';
    }
    else if (ChooseShuffleFragen[NumberofQuizinArrayPublic][questionCount-1].answers[ShuffleAnswerOrder[2]].correct === false) {
        document.getElementById("choice-button2").classList.add('choice-container-red');
        document.getElementById('choice1').style.pointerEvents = 'none';
        document.getElementById('choice2').style.pointerEvents = 'none';
    }
}

//Button to get to Start Page to choose a new Quiz
function HomeButton() {
    document.getElementById("home").style.display = 'block';
    document.getElementById("EndPage").style.display = 'none';
    questionCount = 0;
    score = 0;
    document.getElementById("score").innerHTML = score;
    
}

//Button to restart current Quiz
