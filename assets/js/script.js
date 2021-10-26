// Event Listeners
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('play').addEventListener('click', beginGame);

    let options = document.getElementsByClassName('option');

    for (const option of options) {
        option.addEventListener('click', optionSelected);
    }

    document.getElementById('timer').addEventListener('countdown', handleTimeout);
})


// Global Variables
let selectedQuestions = [];
let numCorrectAnswers = 0;
let numIncorrectAnswers = 0;
let timerInterval;

// Custom Events
const countdownComplete = new CustomEvent('countdown');

/**
 * Gets questions and begins the game
 */
function beginGame() {
    getQuestions();

    loadQuestion(selectedQuestions[0]);
}

/**
 * Selects random questions from the global questions array
 * @returns Array of Question Objects
 */
function getQuestions() {

    let selectedIndex = [];

    for (let i = 0; i < 10; i++) {
        let index = Math.floor(Math.random() * 23);

        //prevents duplicates
        while (selectedIndex.includes(index)) {
            index = Math.floor(Math.random() * 23);
        }

        selectedIndex.push(index);
    }

    for (const index of selectedIndex) {
        selectedQuestions.push(quizQuestions[index]);
    }
}


/**
 * Populates HTML with the parsed question and options
 * @param {Question Object} question 
 */
function loadQuestion(question) {
    document.getElementById('question').textContent = question.question;

    let options = document.getElementsByClassName('option');

    for (const option of options) {
        option.style.visibility = 'hidden';
        option.textContent = question.questionOptions[0];
        question.questionOptions.shift();
    }

    countdown();
}

function gameCompleted() {
    alert('Game Completed ' + calculateScore());
    clearInterval(timerInterval);
}

/**
 * Calcualtes the percentage of answers answered correctly
 * @returns Percentage of correct answers
 */
function calculateScore() {
    return Math.floor((numCorrectAnswers / selectedQuestions.length) * 100);
}

/**
 * Begins a countdown to read and answer questions
 */
function countdown() {
    let timer = document.getElementById('timer');

    const timeLimit = 10;
    let timePassed = 0;
    let timeLeft = timeLimit;

    // Credit to https://css-tricks.com/how-to-create-an-animated-countdown-timer-with-html-css-and-javascript/ - timer function
    timerInterval = setInterval(() => {

        if (timeLeft === 0) {
            clearInterval(timerInterval);
            timer.dispatchEvent(countdownComplete);
            return;
        }

        // The amount of time passed increments by one
        timePassed = timePassed += 1;
        timeLeft = timeLimit - timePassed;

        // The time left label is updated
        timer.innerHTML = timeLeft;

    }, 1000);
}

/**
 * Checks the answer of the provided question
 * @param {Question Object} question 
 * @param {Option Selected String} answer 
 */
function checkAnswer(question, answer) {

    clearInterval(timerInterval);
    document.getElementById('timer').textContent = 10;

    if (question.correctAnswer === answer) {
        numCorrectAnswers++;
    } else {
        numIncorrectAnswers++;
    }

    if ((selectedQuestions.indexOf(question) + 1) === selectedQuestions.length) {
        gameCompleted();
    } else {
        loadQuestion(selectedQuestions[(selectedQuestions.indexOf(question) + 1)]);
    }
}

// Event Triggered Functions

/**
 * Handles the selected option Event
 * @param {Click Event} event 
 */
function optionSelected(event) {

    let answer = event.srcElement.textContent;

    currentQuestion = selectedQuestions.find(question => question.question === document.getElementById('question').textContent);

    checkAnswer(currentQuestion, answer);
}

/***
 * Handles countdown hitting 0 on question and answer
 */
function handleTimeout() {

    let options = document.getElementsByClassName('option');

    if (options[0].style.visibility === 'hidden') {
        for (const option of options) {
            option.style.visibility = 'visible';
        }
        document.getElementById('timer').textContent = 10;

        countdown();
    } else {
        let question = selectedQuestions.find(currentQuestion => currentQuestion.question === document.getElementById('question').textContent);

        checkAnswer(question, '');
    }
}