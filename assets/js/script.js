var headerText = document.querySelector("#header");
var startQuizBtn = document.querySelector("#start-quiz");


var inputForm = document.querySelector("#input-form");
var personName = document.querySelector("#person-name");
var submitScore = document.querySelector("#submit-score");

var questionText = document.querySelector(".question-text");

var questionGroup = document.querySelector(".questions");
var buttonA = document.querySelector("#buttonA");
var buttonB = document.querySelector("#buttonB");
var buttonC = document.querySelector("#buttonC");
var buttonD = document.querySelector("#buttonD");

var timer = document.querySelector("#timer");
var timeLeft = 60;

// var questionCounter = 0;
var currentQuestion = 1;

var correctAnswers = 0;
var incorrectAnswers = 0;
var scoreAmount = 0;

// Store questions in array AND their respective 
var question1 = {
    question: "How do you create a variable called 'myVariable' in Javascript?",
    questionArr : [
        "A: myVariable = 0;",
        "B: myVariable + 0;",
        "C: var myVariable = 0;",
        "D: var myVariable + 0;"]
}
var question2 = {
    question: "What does the 'color' attribute change in CSS?",
    questionArr : [
        "A: text color",
        "B: background color",
        "C: object color",
        "D: none of the above"]
}
var question3 = {
    question: "Which of the following formats is camel case?",
    questionArr : [
        "A: CamelCaseVariable",
        "B: camelCaseVariable",
        "C: Camelcasevariable",
        "D: camelcaseVariable"]
}
var question4 = {
    question: "I want to make a h1 tag HTML, which is correct?",
    questionArr : [
        "A: <header>MyHeader</header>",
        "B: >h1<MyHeader!>/h1<",
        "C: .h1:MyHeader!:h1.",
        "D: <h1>MyHeader!</h1>"]
}

function questionSetup() {
    if (currentQuestion === 1) {
        // Change attributes from the h1, to the questions and answers
        headerText.textContent = question1.question;
        // Change the buttons to have the answers on them
        buttonA.textContent = question1.questionArr[0];
        buttonB.textContent = question1.questionArr[1];
        buttonC.textContent = question1.questionArr[2]; // Correct Answer
        buttonD.textContent = question1.questionArr[3];
        clickListen();
        return;
    }
    if (currentQuestion === 2) {
        // Change attributes from the h1, to the questions and answers
        headerText.textContent = question2.question;
        // Change the buttons to have the answers on them
        buttonA.textContent = question2.questionArr[0]; // Correct Answer
        buttonB.textContent = question2.questionArr[1];
        buttonC.textContent = question2.questionArr[2];
        buttonD.textContent = question2.questionArr[3];
        clickListen();
        return;
    }
    if (currentQuestion === 3) {
        // Change attributes from the h1, to the questions and answers
        headerText.textContent = question3.question;
        // Change the buttons to have the answers on them
        buttonA.textContent = question3.questionArr[0];
        buttonB.textContent = question3.questionArr[1]; // Correct Answer
        buttonC.textContent = question3.questionArr[2];
        buttonD.textContent = question3.questionArr[3];
        clickListen();
        return;
    }
    if (currentQuestion === 4) {
        // Change attributes from the h1, to the questions and answers
        headerText.textContent = question4.question;
        // Change the buttons to have the answers on them
        buttonA.textContent = question4.questionArr[0];
        buttonB.textContent = question4.questionArr[1];
        buttonC.textContent = question4.questionArr[2];
        buttonD.textContent = question4.questionArr[3]; // Correct Answer
        clickListen();
        return;
    }
    if (currentQuestion === 5) {
        // code that brings to entering name for scoreboard
        headerText.textContent = "Quiz done! Here's your results";
        questionGroup.textContent = "Please enter your name or initials to track your score!";
        // Set display to turn back on and change it to different text
        questionText.setAttribute("style", "display: initial");
        inputForm.setAttribute("style", "display: initial");
        scoreAmount = correctAnswers * 25;
        questionText.textContent = "You got " + correctAnswers + " out of 4 answers correct, your score was " + scoreAmount + "% " + "with a time of " + timeLeft + ".";
        return;
    }
    // Eventually get a for loop to iterate through each question to parse through.
    // OR make it so the correct answer is the LINK to the next set of questions
}

function questionSelect(event) {
    event.preventDefault();
    // event.target.id to get the ID of the button that was pressed
    // console.log(typeof event.target.id); String

    if (currentQuestion === 1) {
        // Move onto question 2, and check if they clicked on C[2]
        if (event.target.id === "buttonC") {
            console.log("Correct!");
            correctAnswers++;
        } else {
            console.log("Incorrect!");
            incorrectAnswers++;
        }
        currentQuestion++;
        questionSetup();
        return;
    }
    if (currentQuestion === 2) {
        // A
        if (event.target.id === "buttonA") {
            console.log("Correct!");
            correctAnswers++;
        } else {
            console.log("Incorrect!");
            incorrectAnswers++;
        }
        currentQuestion++;
        questionSetup();
        return;
    }
    if (currentQuestion === 3) {
        // B
        if (event.target.id === "buttonB") {
            console.log("Correct!");
            correctAnswers++;
        } else {
            console.log("Incorrect!");
            incorrectAnswers++;
        }
        currentQuestion++;
        questionSetup();
        return;
    }
    if (currentQuestion === 4) {
        // D
        if (event.target.id === "buttonD") {
            console.log("Correct!");
            correctAnswers++;
        } else {
            console.log("Incorrect!");
            incorrectAnswers++;
        }
        currentQuestion++;
        questionSetup();
        return;
    }
    if (currentQuestion === 5) {

    }
}

function clickListen() {
    buttonA.addEventListener("click", questionSelect);
    buttonB.addEventListener("click", questionSelect);
    buttonC.addEventListener("click", questionSelect);
    buttonD.addEventListener("click", questionSelect);
}

function startQuiz(event) {
    event.preventDefault();
    // QUIZ MODE ACTIVATE
    var counter = setInterval(function() {
        timer.textContent = timeLeft;
        
        // stop timer if either of these circumstances happen
        // User completed quiz before timer ran out
        // Timer ran out on the player
        if (timeLeft === 0) {
            clearInterval(counter);
            currentQuestion = 5;
            console.log("Ran out of time!");
        }
        if (currentQuestion === 5) {
            clearInterval(counter);
            questionSetup();
        }
        timeLeft--;
    }, 1000);
    // Hide quiz button once pressed
    startQuizBtn.setAttribute("style", "display: none");
    // Show regular ABCD button set once clicked
    questionGroup.setAttribute("style", "display: inline-grid");
    document.querySelector(".question-text").setAttribute("style", "display: none");
    
    questionSetup();
    console.log("Successfully Clicked");
}

function saveScoreToBrowser(event) {
    event.preventDefault();
    // Stores the user score as an object with name, timeleft, and correct answers in percentage form
    var scoreObj = {
        name : personName.value.trim(),
        time : timeLeft,
        score : correctAnswers * 25,
    }
    // console.log("personName: " + personName.value.trim());
    localStorage.setItem("score", JSON.stringify(scoreObj));

    // localStorage.setItem("personName.value.trim()", personName.value.trim());

    inputForm.setAttribute("style", "display: none");
    questionText.setAttribute("style", "display: none");
    headerText.textContent = "Thanks for playing!"
    questionGroup.textContent = "Check out the High scores page on the top to see your scores!"
}

// activates upon start quiz button click
startQuizBtn.addEventListener("click", startQuiz);
inputForm.addEventListener("submit", saveScoreToBrowser);