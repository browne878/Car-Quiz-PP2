// Event Listeners
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('play').addEventListener('click', beginGame);
    document.getElementById('play-again').addEventListener('click', beginGame);

    let options = document.getElementsByClassName('option');

    for (const option of options) {
        option.addEventListener('click', optionSelected);
    }

    document.getElementById('timer').addEventListener('countdown', handleTimeout);
});


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

    //Reset global variables for new game
    selectedQuestions = [];
    numCorrectAnswers = 0;
    numIncorrectAnswers = 0;

    getQuestions();

    document.getElementById('welcome-screen').style.visibility = 'hidden';
    document.getElementById('complete-screen').style.visibility = 'hidden';
    document.getElementById('question-screen').style.visibility = 'visible';

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
    }

    for (let i = 0; i < question.questionOptions.length; i++) {
        options[i].textContent = question.questionOptions[i];
    }

    countdown();
}

function gameCompleted() {

    document.getElementById('question-screen').style.visibility = 'hidden';
    document.getElementById('complete-screen').style.visibility = 'visible';

    let options = document.getElementsByClassName('option');

    for (const option of options) {
        option.style.visibility = 'hidden';
    }

    let header = document.getElementById('complete-screen').children[0];

    switch (numCorrectAnswers) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
            header.textContent = 'Nice Try!';
            break;

        case 5:
        case 6:
        case 7:
            header.textContent = 'Good Job!';
            break;

        case 8:
        case 9:
        case 10:
            header.textContent = 'Congratulations!';
            break;
    }

    document.getElementById('score').textContent = `You Scored ${numCorrectAnswers} out of 10!`;
    clearInterval(timerInterval);
}

/**
 * Begins a countdown to read and answer questions
 */
function countdown() {
    let timer = document.getElementById('timer');

    const timeLimit = 10;
    let timePassed = 0;
    let timeLeft = timeLimit;
    
    // Start progress bar animation
    let countdown = document.getElementById('progress-bar');
    let countdownClone = countdown.cloneNode(true);
    countdown.parentNode.replaceChild(countdownClone, countdown);
    document.getElementById('progress-bar').classList.add('load');

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

    let currentQuestion = selectedQuestions.find(question => question.question === document.getElementById('question').textContent);

    checkAnswer(currentQuestion, answer);
}

/***
 * Handles countdown hitting 0 on question and answer
 */
function handleTimeout() {

    let options = document.getElementsByClassName('option');

    if (options[0].style.visibility === 'hidden') {
        for (const option of options) {
            if (option.textContent === '') {
                continue;
            }
            option.style.visibility = 'visible';
        }
        document.getElementById('timer').textContent = 10;

        countdown();
    } else {
        let question = selectedQuestions.find(currentQuestion => currentQuestion.question === document.getElementById('question').textContent);

        checkAnswer(question, '');
    }
}
