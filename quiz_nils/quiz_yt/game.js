const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = []

let questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        choice1: "<javascript>",
        choice2: "<js>",
        choice3: "<script>",
        answer: 3,
    },
    {
        question: 'How do you create a function in JavaScript',
        choice1: 'function = myFunction ()',
        choice2: 'function : myFunction ()',
        choice3: 'function = myFunction[]',
        answer: 1,
    },
    {
        question: 'How does a FOR loop start',
        choice1: 'for(i=0; i<=5;i++)',
        choice2: 'for(let i = 0;)',
        choice3: 'for loop = (let i= 0; i <5; i++)',
        answer: 1,
    },
    {
        question: 'What is the correct way to write a JavaScript array',
        choice1: 'car colors = "red", "green", "blue" ',
        choice2: 'const colors = (red, green, blue)',
        choice3: 'let colors = ["red", "green", "blue"]',
        answer: 3,
    },
    {
        question: 'Which operator is used to assign a value to a variable',
        choice1: '-',
        choice2: '=',
        choice3: '*',
        answer: 2,
    }
]

const SCORE_POINTS = 100;
const MAX_QUESTIONS = 3;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionsCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('/end.html')
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question
    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice'+number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' :
        'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout( () => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        
        },1000)
    })
})