/*
    Need a button to start the quiz.
    when the user clicks on the button, need to display the first question and start the timer
    for every wrong answer, need to reduce the timer by 10 seconds.
    Need variable to keep count of the score, timer, questions
*/

let score =0;
let timer = 60;
let questions = [
    {
        question : "What does HTML stand for?",
        choiceA : "Hyper Text Markup Language",
        choiceB : "Hyperlink Text Markup Language",
        choiceC : "Home Text Markup Language",
        correct: "A"
    },
    {
        question : "Which one of these is a JavaScript package manager?",
        choiceA : "Node.js",
        choiceB : "Type Script",
        choiceC : "npm",
        correct: "C"
    },
    {
        question : "Which tool can you use to ensure code quality?",
        choiceA : "Angular",
        choiceB : "RequireJS",
        choiceC: "ESLint",
        correct : "C"
    }
]

$("#start").on("click", () => {
    document.getElementById("quizContainer").style.display = "block";
    document.getElementById("question1").style.display = "block";
    document.getElementById("start").style.display = "none";
})