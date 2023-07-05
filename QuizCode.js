var timerEl = document.querySelector(".Time");
var startButton = document.querySelector(".Start-Button");
var questionNumEl = document.querySelector(".Question-Number");
var questionEl = document.querySelector(".Question");
var answer1El = document.querySelector(".Answer-1");
var answer2El = document.querySelector(".Answer-2");
var answer3El = document.querySelector(".Answer-3");
var answer4El = document.querySelector(".Answer-4");
var next = document.querySelector(".Next");
var initialsInput = document.querySelector("#Initials-Input");
var highscoreList = document.querySelector("#highscore-list");
var highscoreForm = document.querySelector("#highscore-form");

var timer;
var timerCount;
var questionNum;
var streak;
var streakTime;
var numberCorrect;
var quizCompleted;

var highscores = [];

//disables buttons until quiz starts
answer1El.disabled = true;
answer2El.disabled = true;
answer3El.disabled = true;
answer4El.disabled = true;
next.disabled = true;
initialsInput.disabled = true;

//Questions
var question1 = "What is CSS?";
var question2 = "What is Javascript?";
var question3 = "How do you disable a button in Javascript?";
var question4 = "How do you add text to an element in Javascript";
var question5 = "You are given: var numberCounter. Which of the following adds 1 to the counter?";

//Possibe Answers to Question 1
var a1q1 = "a. Cold, Sweet, Strawberries";
var a2q1 = "b. A programming language used for the presentation of a web page";
var a3q1 = "c. A programming language used for the structure of a web page";
var a4q1 = "d. A javascript function used in many web page";

//Possibe Answers to Question 2
var a1q2 = "e. A programming language used for the presentation of a web page";
var a2q2 = "f. A programming language used for the structure of a web page";
var a3q2 = "g. A game programming language used to make Mincraft";
var a4q2 = "h. A programming language used to make web pages interactive";

//Possibe Answers to Question 3
var a1q3 = "i. buttonElement.disable";
var a2q3 = "j. buttonElement.enable = false";
var a3q3 = "k. buttonElement.disable = true";
var a4q3 = "l. disable(buttonElement)";

//Possibe Answers to Question 4
var a1q4 = "m. element.text = '___'";
var a2q4 = "n. element.textContent = '___'";
var a3q4 = "o. text(element) = '___'";
var a4q4 = "p. textContent(element) {___}";

//Possibe Answers to Question 5
var a1q5 = "q. numberCounter ++";
var a2q5 = "r. numberCounter --";
var a3q5 = "s. numberCounter = (numberCounter + 1) * 10";
var a4q5 = "t. numberCounter.add(1)";

//Start Timer Function
function startTimer() {
    timer = setInterval(function() {
        timerCount --;
        timerEl.textContent = timerCount;

        if (quizCompleted) {
            clearInterval(timer);
        }
    }, 1000);
}

//Start Quiz Funtion
function startQuiz() {
    timerCount = 40;
    questionNum = 1;
    streak = 0;
    numberCorrect = 0;
    startButton.disabled = true;
    quizCompleted = false;
    startTimer();
    showQuestion();

    //Hide Highscores
}

function showQuestion() {
    if (questionNum === 1) {
        function q1() {
            questionNumEl.textContent = "Question " + questionNum + ":";
            questionEl.textContent = question1;
    
            answer1El.textContent = a1q1;
            answer2El.textContent = a2q1;
            answer3El.textContent = a3q1;
            answer4El.textContent = a4q1;

            answer1El.addEventListener("click", incorrectAnswer);
            answer2El.addEventListener("click", correctAnswer);
            answer3El.addEventListener("click", incorrectAnswer);
            answer4El.addEventListener("click", incorrectAnswer);
        }
        q1();

    } else if (questionNum === 2) {
        function q2() {
            questionNumEl.textContent = "Question " + questionNum + ":";
            questionEl.textContent = question2;
    
            answer1El.textContent = a1q2;
            answer2El.textContent = a2q2;
            answer3El.textContent = a3q2;
            answer4El.textContent = a4q2;

            answer1El.addEventListener("click", incorrectAnswer);
            answer2El.addEventListener("click", incorrectAnswer);
            answer3El.addEventListener("click", incorrectAnswer);
            answer4El.addEventListener("click", correctAnswer);
        }
        q2();

    } else if (questionNum === 3) {
        function q3() {
            questionNumEl.textContent = "Question " + questionNum + ":";
            questionEl.textContent = question3;
    
            answer1El.textContent = a1q3;
            answer2El.textContent = a2q3;
            answer3El.textContent = a3q3;
            answer4El.textContent = a4q3;

            answer1El.addEventListener("click", incorrectAnswer);
            answer2El.addEventListener("click", incorrectAnswer);
            answer3El.addEventListener("click", correctAnswer);
            answer4El.addEventListener("click", incorrectAnswer);
        }
        q3();

    } else if (questionNum === 4) {
        function q4() {
            questionNumEl.textContent = "Question " + questionNum + ":";
            questionEl.textContent = question4;
    
            answer1El.textContent = a1q4;
            answer2El.textContent = a2q4;
            answer3El.textContent = a3q4;
            answer4El.textContent = a4q4;

            answer1El.addEventListener("click", incorrectAnswer);
            answer2El.addEventListener("click", correctAnswer);
            answer3El.addEventListener("click", incorrectAnswer);
            answer4El.addEventListener("click", incorrectAnswer);
        }
        q4();

    } else if (questionNum === 5) {
        function q5() {
            questionNumEl.textContent = "Question " + questionNum + ":";
            questionEl.textContent = question5;
    
            answer1El.textContent = a1q5;
            answer2El.textContent = a2q5;
            answer3El.textContent = a3q5;
            answer4El.textContent = a4q5;

            answer1El.addEventListener("click", correctAnswer);
            answer2El.addEventListener("click", incorrectAnswer);
            answer3El.addEventListener("click", incorrectAnswer);
            answer4El.addEventListener("click", incorrectAnswer);
            //remove next button event listener
            //create a screen to input highscore
        }
        q5();
    }

    next.textContent = "";

    // Changes Question
    questionNum ++;

    // Adds 1 to the streak for every correct answer
    streak ++;

    // Enables the buttons to be used to answer questions
    answer1El.disabled = false;
    answer2El.disabled = false;
    answer3El.disabled = false;
    answer4El.disabled = false;
    next.disabled = true;
}

// Runs function when user answers a question incorrectly
function incorrectAnswer() {
    // Reset Streak
    streak = 0;
    // Subtract Time
    timerCount = timerCount - 10;


    questionNumEl.textContent = "INCORRECT";
    questionEl.textContent = "-10 Seconds";

    answer1El.textContent = "";
    answer2El.textContent = "";
    answer3El.textContent = "";
    answer4El.textContent = "";;

    // Disable other buttons until "Next Question" is selected
    answer1El.disabled = true;
    answer2El.disabled = true;
    answer3El.disabled = true;
    answer4El.disabled = true;
    next.disabled = false;

    answer1El.removeEventListener("click", correctAnswer);
    answer2El.removeEventListener("click", correctAnswer);
    answer3El.removeEventListener("click", correctAnswer);
    answer4El.removeEventListener("click", correctAnswer);

    answer1El.removeEventListener("click", incorrectAnswer);
    answer2El.removeEventListener("click", incorrectAnswer);
    answer3El.removeEventListener("click", incorrectAnswer);
    answer4El.removeEventListener("click", incorrectAnswer);

    if(questionNum === 6) {
        quizCompleted = true;

        next.removeEventListener("click", showQuestion);
        next.textContent = "Next"
        //make function to end quiz and put it in the event listener
        next.addEventListener("click", quizResults)
        //Stop the timer
    }else {
        next.textContent = "Next Question";
        next.removeEventListener("click", quizResults)
        // Moves on to the next question
        next.addEventListener("click", showQuestion);
    }
}

// Runs function when user answers a question correctly
function correctAnswer() {
    // Calcs time bonus for user's current streak
    streakTime = (streak - 1) * 5;
    // Adds time bonus if the user has a streak
    timerCount = timerCount + streakTime;
    numberCorrect ++;
    //
    console.log(numberCorrect);
    //
    questionNumEl.textContent = "CORRECT";
    questionEl.textContent = "Current Streak: " + streak + ", +" + streakTime + " Seconds";

    answer1El.textContent = "";
    answer2El.textContent = "";
    answer3El.textContent = "";
    answer4El.textContent = "";

    // Disable other buttons until "Next Question" is selected
    answer1El.disabled = true;
    answer2El.disabled = true;
    answer3El.disabled = true;
    answer4El.disabled = true;
    next.disabled = false;

    answer1El.removeEventListener("click", correctAnswer);
    answer2El.removeEventListener("click", correctAnswer);
    answer3El.removeEventListener("click", correctAnswer);
    answer4El.removeEventListener("click", correctAnswer);

    answer1El.removeEventListener("click", incorrectAnswer);
    answer2El.removeEventListener("click", incorrectAnswer);
    answer3El.removeEventListener("click", incorrectAnswer);
    answer4El.removeEventListener("click", incorrectAnswer);

    if(questionNum === 6) {
        quizCompleted = true;

        next.removeEventListener("click", showQuestion);
        next.textContent = "Next"
        //make function to end quiz and put it in the event listener
        next.addEventListener("click", quizResults)
        //Stop the timer
    }else {
        next.textContent = "Next Question";
        next.removeEventListener("click", quizResults)
        // Moves on to the next question
        next.addEventListener("click", showQuestion);
    }
}

startButton.addEventListener("click", startQuiz);

function quizFailed() {

}

// Quiz Results should include: # of Correct questions, Time left, and a place for the user to input their initials
function quizResults() {
    console.log("End Screen");
    console.log("Total Correct: " + numberCorrect)
    initialsInput.disabled = false;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function renderHighscores() {
    highscoreList.innerHTML = "";

    for (var i = 0; i < highscores.length; i++) {
        var highscore = highscores[i];

        var li = document.createElement("li");
        li.textcontent = highscore + ", Time Left: " + timerCount + ", # of Correct Answers: " + numberCorrect;
        li.setAttribute("data-index", i);
        
        console.log("WHY WILL IT NOT WORK!!!!!!!!!!!!!!!!!!!!!")

        highscoreList.appendChild(li);
    }
}

function init() {
    var storedHighscores = JSON.parse(localStorage.getItem("highscores"));

    if (storedHighscores !== null) {
        highscores = storedHighscores;
    }

    renderHighscores();
}

function storeHighscores() {
    localStorage.setItem("highscores", JSON.stringify(highscores));
}

highscoreForm.addEventListener("submit", function(event) {
    event.preventDefault();

    var initialsText = initialsInput.value.trim();

    if (initialsText === "") {
        return;
    }

    highscores.push(initialsText);
    initialsInput.value = "";

    storeHighscores();
    renderHighscores();
    
    console.log("Highscore!")
});

init();