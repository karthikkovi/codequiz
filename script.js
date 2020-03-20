//Declaring the initial variables

let score = 0;
let timer = 29; // Declared as 29, to compensate for the delay when the button is clicked and timer is triggered

// Added logic to prevent high score from displaying as null
let highScore = localStorage.getItem("highScore");

if (highScore ===  null) {
    highScore = 0;
}

// Function to read the values of the answers clicked and incrementing the score or decrementing the timer
function reply_click(clicked_id) {
    if (clicked_id === "q1A" || clicked_id === "q2A") {
        score++
    } else {
        timer -= 10;
    }
}

// To change the CSS styles of the elements when the start button is clicked
$("#start").on("click", () => {
    document.getElementById("mainPage").style.display = "none";
    document.getElementById("quizContainer").style.display = "block";
    document.getElementById("question1").style.display = "block";
    document.getElementById("start").style.display = "none";

    // Declaring the timer interval function

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

// Changing the CSS properties based on the buttons clicked
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