const questions = [
    {
        title: "What does HTML stand for?",
        choices: ["Hyper Text Markup Language", "Hyperlink Text Markup Language", "Home Text Markup Language"],
        answer: "a"
    },
    {
        title: " Which one of these is a JavaScript package manager?",
        choices: ["npm", "Type Script", "Node.js"],
        answer: "a"
    },
    {
        title: 'What is the correct way to call a string’s built-in method?',
        choices: [
          "toUpperCase('str')",
          "'str'.toUpperCase()",
          "'str'.toUpperCase"
        ],
        answer: "b"
    }
]
//Declaring the initial variables

let score = 0;
let timer = 29; // Declared as 29, to compensate for the delay when the button is clicked and timer is triggered

// Added logic to prevent high score from displaying as null
let highScore = localStorage.getItem("highScore");

if (highScore ===  null) {
    highScore = 0;
}

$("#start").on("click", () => {

    document.getElementById("mainPage").style.display = "none";
    document.getElementById("finish").style.display = "block";
    $(".questionScreen").append(`${questions[0].title}`);

    $(".answers").append(`<a href="#" class="list-group-item list-group-item-action" data-choice="a"> ${questions[0].choices[0]} </a>`)
    $(".answers").append(`<a href="#" class="list-group-item list-group-item-action" data-choice="b"> ${questions[0].choices[1]} </a>`)
    $(".answers").append(`<a href="#" class="list-group-item list-group-item-action" data-choice="c"> ${questions[0].choices[2]} </a>`)

    $(".list-group-item").on("click", (e) => {
        let selectedAnswer = e.currentTarget.attributes[2].nodeValue;
        console.log(selectedAnswer)
        if (selectedAnswer === questions[0].answer) {
            score ++
        }
        $(".questionScreen").empty();
        $(".answers").empty();
        displayQuestion();
    })
})


$("#finish").on("click", () => {

    document.querySelector(".questionSpace").style.display = "none";
    document.getElementById("score").style.display = "block";
    $("#score").text("Score: " + score)

    //Setting the local storage if the score entered is the high score
    if (score > highScore) {
        $("#highScore").text("High Score: " + score);
        localStorage.setItem("highScore", score);
    }    
    
})

//displaying the high score
$("#highScore").on("click", () => {
    $("#highScore").text("High Score: " + highScore)
})

//To clear local storage
$("#clearScore").on("click", () => {
    localStorage.clear();
})

    // Declaring the timer interval function
    let timerInterval = setInterval(() => {
        $("#timer").text("Time left: " + timer);
    
        timer--;
    
        if (timer < 0) {    
            
            document.querySelector(".questionSpace").style.display = "none";
            document.getElementById("score").style.display = "block";
            document.getElementById("mainPage").style.display = "none";
            $("#score").text("Score: " + score)
        
            //Setting the local storage if the score entered is the high score
            if (score > highScore) {
                $("#highScore").text("High Score: " + score);
                localStorage.setItem("highScore", score);
            }
    
            clearInterval(timerInterval);
    
        }
    
    }, 1000)

function displayQuestion() {

    $(".questionScreen").append(`${questions[1].title}`);

    $(".answers").append(`<a href="#" class="list-group-item list-group-item-action" data-choice="a"> ${questions[1].choices[0]} </a>`)
    $(".answers").append(`<a href="#" class="list-group-item list-group-item-action" data-choice="b"> ${questions[1].choices[1]} </a>`)
    $(".answers").append(`<a href="#" class="list-group-item list-group-item-action" data-choice="c"> ${questions[1].choices[2]} </a>`)

    $(".list-group-item").on("click", (e) => {
        let selectedAnswer = e.currentTarget.attributes[2].nodeValue;
        console.log(selectedAnswer)
        if (selectedAnswer === questions[0].answer) {
            score ++
        }
        $(".questionScreen").empty();
        $(".answers").empty();
        displayQuestion2();       
    })
}

function displayQuestion2() {

    $(".questionScreen").append(`${questions[2].title}`);

    $(".answers").append(`<a href="#" class="list-group-item list-group-item-action" data-choice="a"> ${questions[2].choices[0]} </a>`)
    $(".answers").append(`<a href="#" class="list-group-item list-group-item-action" data-choice="b"> ${questions[2].choices[1]} </a>`)
    $(".answers").append(`<a href="#" class="list-group-item list-group-item-action" data-choice="c"> ${questions[2].choices[2]} </a>`)

    $(".list-group-item").on("click", (e) => {
        let selectedAnswer = e.currentTarget.attributes[2].nodeValue;
        console.log(selectedAnswer)
        if (selectedAnswer === questions[2].answer) {
            score ++
        }
        
        document.querySelector(".questionSpace").style.display = "none";
        document.getElementById("score").style.display = "block";
        $("#score").text("Score: " + score)
    
        //Setting the local storage if the score entered is the high score
        if (score > highScore) {
            $("#highScore").text("High Score: " + score);
            localStorage.setItem("highScore", score);
        }   
    })
}