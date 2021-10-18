//variable to display the timer
var timerEl = document.getElementById("timer");
// section to hold the quiz
var quizSection = document.getElementById("quiz-section");
// function to start the quiz
function myFunction() {
  onclick = document.getElementById("quiz-section").style.display = "block";
  onclick = document.getElementById("main-header").style.display = "none";
}

// initialize time count
var initialTime = 60;
var myTimer;
//function the countdown the timer
function countdown() {
  
  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    //set the timer element to hold the timer
    timerEl.textContent = initialTime;
    // timer running down to 1 second
    initialTime--;
    // if timer is less than zero clear interval
    if (initialTime < 0){
     clearInterval(timeInterval);
     //alert the user it's game over
      alert("Game over!");
      
    }
    // set the clock to run every seconds
  }, 1000);
}
countdown();
// function to build the quiz
function buildQuiz() {
  // variable to store the HTML output
  var output = [];

  // for each question...
  myQuestions.forEach((currentQuestion, questionNumber) => {
    // variable to store the list of possible answers
    var answers = [];

    // and for each available answer...
    for (letter in currentQuestion.answers) {
      // ...add an HTML radio button
      answers.push(
        `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
              </label>`
      );
    }

    // add this question and its answers to the output
    output.push(
      `<div class ="slide">
              <div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join("")} </div>
              </div>`
    );
  });

  // finally combine our output list into one string of HTML and put it on the page
  quizContainer.innerHTML = output.join("");
}

function showResults() {
  // gather answer containers from our quiz
  var answerContainers = quizContainer.querySelectorAll(".answers");
  // keep track of user's answers
  let numCorrect = 0;
  
  // for each question...
  myQuestions.forEach((currentQuestion, questionNumber) => {
    // find selected answer
    var answerContainer = answerContainers[questionNumber];
    var selector = `input[name=question${questionNumber}]:checked`;
    var userAnswer = (answerContainer.querySelector(selector) || {}).value;

    // if answer is correct
    if (userAnswer === currentQuestion.correctAnswer) {
      numCorrect++;
      
      // color the answers green
      answerContainers[questionNumber].style.color = "green";
      console.log(userAnswer);
    }
    // if answer is wrong or blank
    else {
      alert("Question number " + questionNumber + " answer is wrong, 5 seconds was deducted,  current time left is " + initialTime);
       initialTime = initialTime - 5;
      answerContainers[questionNumber].style.color = "red";
      console.log(initialTime);
    }

  });
    
  // show number of correct answers out of total
  resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  
}
var quizContainer = document.getElementById("quiz");
var resultsContainer = document.getElementById("results");
var submitButton = document.getElementById("submit");
var replayButton = document.getElementById("replay");
// create a functions for the questions and answers selectors
// create arrays for the questions
var myQuestions = [
  {
    question: "What does Html stand for?",
    answers: {
      a: "Hypertext Markup Language",
      b: "Hyperlinks and Text Markup Language",
      c: "Home Tool Markup Language ",
    },
    correctAnswer: "a",
  },
  {
    question: "Who is making the Web standards?",
    answers: {
      a: "Google",
      b: "Mozilla",
      c: "Microsoft",
      d: "The World Wide Web Consortium",
    },
    correctAnswer: "d",
  },
  {
    question: "What does CSS stand for?",
    answers: {
      a: "Colorful Style Sheets",
      b: "Computer Style Sheets",
      c: "Creative Style Sheets",
      d: "Cascading Style Sheets",
    },
    correctAnswer: "d",
  },
  {
    question:
      "Where in an HTML document is the correct place to refer to an external style sheet?",
    answers: {
      a: "In the < body > section",
      b: "At the end of the document",
      c: "In the < head > section",
    },
    correctAnswer: "c",
  },
  {
    question: "Whict is the correct CSS syntax?",
    answers: {
      a: "{body; color:black;}",
      b: "body: color:black;",
      c: "{body:color=black;}",
      d: "body{color:black;}",
    },
    correctAnswer: "d",
  },
  {
    question:
      "What is the correct syntax for referring to an external script called 'xxx.js'?",
    answers: {
      a: "< script name = 'xxx.js' >",
      b: "< script href = 'xxx.js' >",
      c: "< script src = 'xxx.js' >",
    },
    correctAnswer: "c",
  },
  {
    question: "Inside which HTML element do we put the JavaScript?",
    answers: {
      a: "< scripting >",
      b: "< script >",
      c: "javascript",
      d: "< js >",
    },
    correctAnswer: "b",
  },
  {
    question: "Who invented JavaScript?",
    answers: {
      a: "Douglas Crockford",
      b: "Sheryl Sandberg",
      c: "Brendan Eich",
    },
    correctAnswer: "c",
  },
  {
    question: "Which one of these is a JavaScript package manager?",
    answers: {
      a: "Node.js",
      b: "TypeScript",
      c: "npm",
    },
    correctAnswer: "c",
  },
  {
    question: "Which tool can you use to ensure code quality?",
    answers: {
      a: "Angular",
      b: "jQuery",
      c: "RequireJS",
      d: "ESLint",
    },
    correctAnswer: "d",
  },
];
// Show the quiz section
buildQuiz();


//pagination for the slides buttons
var previousButton = document.getElementById("previous");
var nextButton = document.getElementById("next");
var slides = document.querySelectorAll(".slide");
// set currentSlide function to start at zero
let currentSlide = 0;
// style the results container
resultsContainer.setAttribute("style", "color:blue;");
// style the timer container
timerEl.setAttribute("style", "color:#8a0b1c; font-size:25px;");
// hide the quiz section before starts
quizSection.setAttribute("style", "display:none; font-size:22px;");
// style the previous, next and submit buttons
previousButton.setAttribute(
  "style",
  "padding: 8px 12px; background-color: blue; color: white; border-radius: 5px;border: 2px solid gray"
);
nextButton.setAttribute(
  "style",
  "padding:8px 12px; color:white; background-color:green; border-radius:5px; border: 2px solid white"
);
submitButton.setAttribute(
  "style",
  "padding:8px 12px; color:white; background-color:red; border-radius:5px; border: 2px solid white"
);
// function to show the questions
showSlide(currentSlide);

function showSlide(n) {
  slides[currentSlide].classList.remove("active-slide");
  slides[n].classList.add("active-slide");
  currentSlide = n;
  // if current slide is zero display nothing
  if (currentSlide === 0) {
    previousButton.style.display = "none";
  } else {
    // if it's running the quiz display 
    previousButton.style.display = "inline-block";
  }
  // if the question end, hide the next button and replace it with submit button
  if (currentSlide === slides.length - 1) {
    nextButton.style.display = "none";
    submitButton.style.display = "inline-block";
    
  } else {
    //if still running hide the submit button
    nextButton.style.display = "inline-block";
    submitButton.style.display = "none";
    
  }
}
// function to slide the questions forward
function showNextSlide() {
  showSlide(currentSlide + 1);
}
// function to return to the previous questions
function showPreviousSlide() {
  showSlide(currentSlide - 1);
}

// on submit, show results
previousButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);
submitButton.addEventListener("click", showResults);
