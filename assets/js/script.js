document.getElementById('play').addEventListener('click', beginGame);

loadQuestion(quizQuestions[2]);

function beginGame() {

}

/**
 * Selects random questions from the global questions array
 * @returns Array of Question Objects
 */
function getQuestions() {
    let selectedIndex = [];
    let selectedQuestions = [];

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

    return selectedQuestions;
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