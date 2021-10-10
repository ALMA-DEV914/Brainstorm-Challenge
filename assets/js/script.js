//function to set the timer
var timerEl = document.getElementById('timer');
var quizSection = document.getElementById("quiz-section");

quizSection.setAttribute("style", "display:none;");

function myFunction(){
    onclick = document.getElementById("quiz-section").style.display = "block";
    onclick =document.getElementById("main-header").style.display = "none";
}
var timeLeft = 60;
function countdown(){
    
// Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function() {
      timerEl.textContent = timeLeft;
      timeLeft--;
      if (timeLeft < 0){
            clearInterval(timeInterval);
              alert("Game over!");
            } 
            
    }, 1000);
}

  countdown();

function buildQuiz(){
    // variable to store the HTML output
    var output = [];
  
    // for each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {
  
        // variable to store the list of possible answers
        var answers = [];
  
        // and for each available answer...
        for(letter in currentQuestion.answers){
  
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
              <div class="answers"> ${answers.join('')} </div>
              </div>`
            );
          }
        );
      
        // finally combine our output list into one string of HTML and put it on the page
        quizContainer.innerHTML = output.join('');
      }
      
function showResults(){
    // gather answer containers from our quiz
  var answerContainers = quizContainer.querySelectorAll('.answers');

  // keep track of user's answers
  let numCorrect = 0;

  // for each question...
  myQuestions.forEach( (currentQuestion, questionNumber) => {

    // find selected answer
    var answerContainer = answerContainers[questionNumber];
    var selector = `input[name=question${questionNumber}]:checked`;
    var userAnswer = (answerContainer.querySelector(selector) || {}).value;

    // if answer is correct
    if(userAnswer === currentQuestion.correctAnswer){
      // add to the number of correct answers
      numCorrect++;

       // color the answers green
       answerContainers[questionNumber].style.color = 'lightgreen';
       
    }
    // if answer is wrong or blank
    else{
      // color the answers red
      answerContainers[questionNumber].style.color = 'red';
      timeLeft = timeLeft - 5;
    }
  });

  // show number of correct answers out of total
  resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');
var myQuestions = [
    {
      question: "Who invented JavaScript?",
      answers: {
        a: "Douglas Crockford",
        b: "Sheryl Sandberg",
        c: "Brendan Eich"
      },
      correctAnswer: "c"
    },
    {
      question: "Which one of these is a JavaScript package manager?",
      answers: {
        a: "Node.js",
        b: "TypeScript",
        c: "npm"
      },
      correctAnswer: "c"
    },
    {
        question: "Which tool can you use to ensure code quality?",
answers: {
  a: "Angular",
  b: "jQuery",
  c: "RequireJS",
  d: "ESLint"
},
correctAnswer: "d"
}
];
// display quiz right away
buildQuiz();
// Pagination
var previousButton = document.getElementById("previous");
var nextButton = document.getElementById("next");
var slides = document.querySelectorAll(".slide");
let currentSlide = 0;
showSlide(currentSlide);

showSlide(currentSlide);
function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    if(currentSlide === 0){
      previousButton.style.display = 'none';
    }
    else{
      previousButton.style.display = 'inline-block';
    }
    if(currentSlide === slides.length-1){
      nextButton.style.display = 'none';
      submitButton.style.display = 'inline-block';
    }
    else{
      nextButton.style.display = 'inline-block';
      submitButton.style.display = 'none';
    }
  }
  

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }
  
  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

// on submit, show results
previousButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);
submitButton.addEventListener('click', showResults);
