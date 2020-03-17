const start = document.getElementById("start");
const quiz = document.getElementById("quizConatiner");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const score = 0;
const highScore = document.getElementById("highScore");
const timer = document.getElementById("timer");

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

let lastQuestion = questions.length - 1;
let runningQuestion = 0;

function renderQuestion() {
    let q = questions[runningQuestion];

    quiz.innerHTML = `<p> ${q.question} </p>`;
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}