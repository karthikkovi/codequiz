/*
    Need a button to start the quiz.
    when the user clicks on the button, need to display the first question and start the timer
    for every wrong answer, need to reduce the timer by 10 seconds.
    Need variable to keep count of the score, timer, questions
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
*/

let score = 0;
let timer = 29;
let highScore = localStorage.getItem("highScore");

if (highScore ===  null) {
    highScore = 0;
}

function reply_click(clicked_id) {
    if (clicked_id === "q1A" || clicked_id === "q2A") {
        score++
    } else {
        timer -= 10;
    }
}


$("#start").on("click", () => {
    document.getElementById("mainPage").style.display = "none";
    document.getElementById("quizContainer").style.display = "block";
    document.getElementById("question1").style.display = "block";
    document.getElementById("start").style.display = "none";


    let timerInterval = setInterval(() => {
        $("#timer").text("Time left: " + timer);

        timer--;

        if (timer < 0) {

            document.getElementById("question1").style.display = "none";
            document.getElementById("question2").style.display = "none";
            document.getElementById("finish").style.display = "none";
            document.getElementById("next").style.display = "none";

            $("#score").text("Score: " + score)
            document.getElementById("score").style.display = "block";
            

            clearInterval(timerInterval);

        }

    }, 1000)

})

$("#next").on("click", () => {
    document.getElementById("finish").style.display = "block";
    document.getElementById("next").style.display = "none";
    document.getElementById("question2").style.display = "block";
    document.getElementById("question1").style.display = "none";
})

$("#finish").on("click", () => {
    document.getElementById("question2").style.display = "none";
    document.getElementById("finish").style.display = "none";

    document.getElementById("score").style.display = "block";
    $("#score").text("Score: " + score)

    if (score > highScore) {
        $("#highScore").text("High Score: " + score);
        localStorage.setItem("highScore", score);
    }
})

$("#highScore").on("click", () => {
    $("#highScore").text("High Score: " + highScore)
})

$("#clearScore").on("click", () => {
    localStorage.clear();
})