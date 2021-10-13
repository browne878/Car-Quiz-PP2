// Event Listeners
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('play').addEventListener('click', beginGame);
    
    let options = document.getElementsByClassName('option');

    for (const option of options) {
        option.addEventListener('click', optionSelected);
    }
})


// Global Variables
let selectedQuestions = [];
let numCorrectAnswers = 0;
let numIncorrectAnswers = 0;

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
        option.textContent = question.questionOptions[0];
        question.questionOptions.shift();
    }
}

function gameCompleted() {
    alert('Game Completed');
}

// Event Triggered Functions

/**
 * Handles the selected option Event
 * @param {Click Event} event 
 */
function optionSelected(event) {
    let answer = event.srcElement.textContent;

    currentQuestion = selectedQuestions.find(question => question.question === document.getElementById('question').textContent);

    if (currentQuestion.correctAnswer === answer) {
        numCorrectAnswers++;
    } else {
        numIncorrectAnswers++;
    }

    if ((selectedQuestions.indexOf(currentQuestion) + 1) === selectedQuestions.length) {
        gameCompleted();
    } else {
        loadQuestion(selectedQuestions[(selectedQuestions.indexOf(currentQuestion) + 1)]);
    }
}