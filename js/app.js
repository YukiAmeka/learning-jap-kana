function populate() {
    if (quiz.isEnded()) {
        showScores();
    }
    else {
        let question_element = document.getElementById("question");
        question_element.innerHTML = quiz.getQuestionIndex().text;
        let choices = quiz.getQuestionIndex().choices;
        for (let i = 0; i < choices.length; i++) {
            let choices_element = document.getElementById("choice" + i);
            choices_element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
        showProgress();
    }
}

function guess(id, guess) {
    let button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
}

function showProgress() {
    let currentQuestionNumber = quiz.questionIndex + 1;
    let footer_element = document.getElementById("progress");
    footer_element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
}

function showScores() {
    let quizResult = "<h1>Result</h1>";
    quizResult += "<h2 id='score'>Your score is: " + quiz.score + "</h2>";
    let quizArea = getElementById("quiz");
    quizArea.innerHTML = quizResult;
}

let questions = [
    new Question("Which kana is pronounced as A?", ["a", "i", "u", "o"], "a"),
    new Question("Which kana is pronounced as O?", ["e", "o", "i", "u"], "o"),
    new Question("Which kana is pronounced as I?", ["o", "i", "u", "a"], "i"),
    new Question("Which kana is pronounced as U?", ["u", "i", "a", "e"], "u"),
    new Question("Which kana is pronounced as E?", ["o", "u", "e", "i"], "e"),
];

let quiz = new Quiz(questions);

populate();