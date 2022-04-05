var headerText = document.querySelector("#header");
// var questionText = document.querySelector(".question-text");

var startQuizBtn = document.querySelector("#start-quiz");

var questionGroup = document.querySelector(".questions");
var buttonA = document.querySelector("#buttonA");
var buttonB = document.querySelector("#buttonB");
var buttonC = document.querySelector("#buttonC");
var buttonD = document.querySelector("#buttonD");

// Store questions in array AND their respective 
// Question/Answer Format
var question1 = "How do you create a variable called 'myVariable' in Javascript?";
var question1arr = [
    "A: myVariable = 0;",
    "B: myVariable + 0;",
    "C: var myVariable = 0;",
    "D: var myVariable + 0;"];

var question2 = "Whats a function?";
var question2arr = [
    "A: ",
    "B: ",
    "C: ",
    "D: "
];

var question3 = "";
var question3arr = [
    "A: ",
    "B: ",
    "C: ",
    "D: "
];

var question4 = "";
var question4arr = [
    "A: ",
    "B: ",
    "C: ",
    "D: "
];

function questionSetup() {
    // Change attributes from the h1, to the questions and answers
    headerText.textContent = question1;

    // Change the buttons to have the answers on them
    buttonA.textContent = question1arr[0];
    buttonB.textContent = question1arr[1];
    buttonC.textContent = question1arr[2];
    buttonD.textContent = question1arr[3];
    // Eventually get a for loop to iterate through each question to parse through.
    // OR make it so the correct answer is the LINK to the next set of questions
}

function startQuiz(event) {
    event.preventDefault();
    // QUIZ MODE ACTIVATE

    // Hide quiz button once pressed
    startQuizBtn.setAttribute("style", "display: none");
    // Show regular ABCD button set once clicked
    questionGroup.setAttribute("style", "display: inline-grid");
    document.querySelector(".question-text").setAttribute("style", "display: none");

    questionSetup();
    console.log("Successfully Clicked");
}

// activates upon start quiz button click
startQuizBtn.addEventListener("click", startQuiz);