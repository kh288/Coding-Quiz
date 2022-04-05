// Question/Answer Format
// var question1 = "How do you create a variable called 'myVariable' in Javascript?";
// var question1arr = [
//     "A: myVariable = 0;",
//     "B: myVariable + 0;",
//     "C: var myVariable = 0;",
//     "D: var myVariable + 0;"];

// var question2 = "Whats a function?";
// var question2arr = [
//     "A: a collection of code to perform",
//     "B: huh",
//     "C: what",
//     "D: not this one"
// ];

// var question3 = "";
// var question3arr = [
//     "A: ",
//     "B: ",
//     "C: ",
//     "D: "
// ];

// var question4 = "";
// var question4arr = [
//     "A: ",
//     "B: ",
//     "C: ",
//     "D: "
// ];

var headerText = document.querySelector("#header");
// var questionText = document.querySelector(".question-text");

var startQuizBtn = document.querySelector("#start-quiz");

var questionGroup = document.querySelector(".questions");
var buttonA = document.querySelector("#buttonA");
var buttonB = document.querySelector("#buttonB");
var buttonC = document.querySelector("#buttonC");
var buttonD = document.querySelector("#buttonD");

// var questionCounter = 0;
var currentQuestion = 1;

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
        return;
    }
    if (currentQuestion === 5) {
        // code that brings to entering name for scoreboard
    }
    // Eventually get a for loop to iterate through each question to parse through.
    // OR make it so the correct answer is the LINK to the next set of questions
}

function questionSelect() {
    
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

buttonA.addEventListener("click", );
buttonB.addEventListener("click");
buttonC.addEventListener("click");
buttonD.addEventListener("click");