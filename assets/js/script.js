//craete an array of questions giving the choice as boolean
let questions = [{
    question: "What does Html stand for?",
    answers: [{
      "textContent": "Hypertext Markup Language",
      isCorrect: true
    },
      {
      "textContent": "Hyperlinks and Text Markup Language",
      isCorrect: false
      },
      {
      "textContent": "Home Tool Markup Language ",
      isCorrect:false
  },
]
},
  {
    question: "Who is making the Web standards?",
    answers: [{
      "textContent": "Google",
      isCorrect: false
    },
    {
      "textContent": "Mozilla",
      isCorrect: false
    },
      {
      "textContent": "Microsoft",
      isCorrect: false
    },
      {
      "textContent": "The World Wide Web Consortium",
      isCorrect: true
    },
  ]
  },
  {
    question: "What does CSS stand for?",
    answers: [{
      "textContent": "Colorful Style Sheets",
      isCorrect: false
    },
    {
      "textContent": "Computer Style Sheets",
      isCorrect: false
    },
    {
      "textContent" : "Creative Style Sheets",
      isCorrect: false
    },
    {
    "textContent": "Cascading Style Sheets",
    isCorrect: true
    },
    ]
  },
  {
    question:
      "Where in an HTML document is the correct place to refer to an external style sheet?",
    answers: [{
      "textContent": "In the < body > section",
      isCorrect: false
    },
      {
        "textContent": "At the end of the document",
        isCorrect: false
      },
      {
        "textContent": "In the < head > section",
        isCorrect: true
      },
  ]
  },
  {
    question: "Whict is the correct CSS syntax?",
    answers: [{
      "textContent" : "{body; color:black;}",
      isCorrect: false
    },
    {
      "textContent": "body: color:black;",
      isCorrect: false
    },
    {
      "textContent": "{body:color=black;}",
      isCorrect: false
    },
    {
      "textContent": "body{color:black;}",
      isCorrect: true
    },
  ]
  },
  {
    question:
      "What is the correct syntax for referring to an external script called 'xxx.js'?",
    answers: [{
      "textContent": "< script name = 'xxx.js' >",
      isCorrect: false
    },
    {
      "textContent" : "< script href = 'xxx.js' >",
      isCorrect: false
    },
    {
      "textContent": "< script src = 'xxx.js' >",
      isCorrect: true
    },
  ]
  },
  {
    question: "Inside which HTML element do we put the JavaScript?",
    answers: [{
      "textContent" : "< scripting >",
      isCorrect: false
    },
    {
      "textContent": "< script >",
      isCorrect: true
    },
    {
      "textContent": "javascript",
      isCorrect: false
    },
    {
      "textContent": "< js >",
      isCorrect: false
    },
  ]
  },
  {
    question: "Who invented JavaScript?",
    answers: [{
      "textContent": "Douglas Crockford",
      isCorrect: false
    },
    {
      "textContent": "Sheryl Sandberg",
      isCorrect: false
    },
    {
      "textContent": "Brendan Eich",
      isCorrect: true
    },
  ]
  },
  {
    question: "Which one of these is a JavaScript package manager?",
    answers: [{
      "textContent" : "Node.js",
      isCorrect: false
    },
    {
      "textContent": "TypeScript",
      isCorrect: false
    },
    {
      "textContent": "npm",
      isCorrect: true
    },
  ]
  },
  {
    question: "Which tool can you use to ensure code quality?",
    answers: [{
      "textContent": "Angular",
      isCorrect: false
    },
      {
      "textContent": "jQuery",
      isCorrect: false
    },
    {
      "textContent": "RequireJS",
      isCorrect: false
    },
    {
      "textContent": "ESLint",
      isCorrect: true
    },
  ]
  },
];
//get DOM element objects needed
var startButton = document.querySelector(".button");
var question = document.querySelector(".question");
var questionContainer = document.querySelector(".question-container");
var answers = document.querySelectorAll(".user-choice");
var score = document.querySelector(".time-score");
var finalScore = document.querySelector(".final-score");
var gameOverContainer = document.querySelector(".game-over-container");
var scoreContainer = document.querySelector(".score-container");
var userFeedback = document.querySelector(".user-feedback");
var givenAnswers = document.querySelector(".given-answers");
var initialEntry = document.querySelector(".initial-entry");
var submitButton = document.querySelector(".button-submit");
var userEntry = document.querySelector(".user-entry");
var highScoreBoard = document.querySelector(".high-scores");
var clearScoreButton = document.querySelector(".clear-scores");
var restartQuizButton = document.querySelector(".restart-quiz");


// Game Variables
var timeScore = 120;
var answerWaitTime = 1000;
var scoreBoardSave = {
    score: "",
    initials: ""
};

//get random array for question display
var randomOrder = getRandomIntArray(0, questions.length);

//add event listeners to each answer element
for (let i = 0; i < answers.length; i++) {
    answers[i].addEventListener("click", function() {
        //show feedback
        userFeedback.classList.remove('hide-element');
        //get whether correct
        var isCorrect = answers[i].getAttribute("data-boolean");
        //convert string to boolean
        var isCorrectBool = (isCorrect.toLowerCase() === 'true')
        if (isCorrectBool) {
            userFeedback.innerHTML = "Correct";
        } else {
            timeScore = timeScore - 5;
            userFeedback.innerHTML = "Incorrect, minus 5 seconds";
        }
        givenAnswers.classList.add('hide-element');
        //add timeout so user can see answer feedback
        setTimeout(function() {
            userFeedback.classList.add('hide-element');
            givenAnswers.classList.remove('hide-element');
            getNextQuestionOrEnd();
        }, answerWaitTime);
    });
}

//start quiz button event listener
startButton.addEventListener("click", function() {
    //hide quiz button, show quiz container HTML
    startButton.classList.add('hide-element');
    questionContainer.classList.remove('hide-element');
    //start score/timer
    scoreTimerCountdown();
    //execute the quiz in random order
    getNextQuestionOrEnd();
});
4

//submit initials/score button
submitButton.addEventListener("click", function() {
    //save final score to game (if not grab final-score timer value)
    scoreBoardSave.score = finalScore.innerHTML;
    //save initials
    scoreBoardSave.initials = initialEntry.value;
    //save to local storage
    addLocalStorageEntry(scoreBoardSave);
    //render on score card
    generateTable();
    //hide input fields
    userEntry.classList.add('hide-element');
    finalScore.parentElement.classList.add('hide-element');
});

//clear local storage entry
clearScoreButton.addEventListener("click", function() {
    existingEntries = [];
    localStorage.setItem("allScoreEntries", JSON.stringify(existingEntries));
    generateTable();
});

//restart game
restartQuizButton.addEventListener("click", function() {
    window.location.href = "./index.html";
});

//generate populated table
function generateTable() {
    //clear current render
    highScoreBoard.innerHTML = "<tr><th>Initials</th><th>Score</th></tr>";
    //get parsed array of score objects
    var allSavedScores = JSON.parse(localStorage.getItem("allScoreEntries"));
    //generate each score
    for (let i = 0; i < allSavedScores.length; i++) {
        const element = allSavedScores[i];
        highScoreBoard.innerHTML += "<tr><td>" + element.initials + "</td><td>" + element.score + "</td></tr>";
    }
}

//pull array from local storage and add object entries to it
function addLocalStorageEntry(scoreBoardObject) {
    // Parse any JSON previously stored in allEntries
    var existingEntries = JSON.parse(localStorage.getItem("allScoreEntries"));
    if (existingEntries == null) {
        existingEntries = [];
    }
    localStorage.setItem("userEntry", JSON.stringify(scoreBoardObject));
    //add object to array
    existingEntries.push(scoreBoardObject);
    //sort array before adding to local storage 
    existingEntries.sort(function(b, a) {
        return parseFloat(a.score) - parseFloat(b.score);
    });
    // Save allEntries back to local storage
    localStorage.setItem("allScoreEntries", JSON.stringify(existingEntries));
};

//Get an array of random unique integers between min and max
function getRandomIntArray(min, max) {
    var returnSet = new Set();
    //There may be a more efficient way to do this as it will run potentially more than max variable times
    while (returnSet.size < max) {
        var randomInt = Math.floor(Math.random() * (max - min) + min);
        returnSet.add(randomInt);
    };
    return Array.from(returnSet);
}

//Countdown Timer
function scoreTimerCountdown() {
    //set score 1st for better responsiveness then initiate countdown
    score.innerHTML = timeScore;
    var countDown = setInterval(function() {
        timeScore--;
        score.innerHTML = timeScore;
        if (timeScore <= 0) {
            //setInterval() method returns an ID which can be used by the clearInterval() method to stop the interval.
            clearInterval(countDown);
            getNextQuestionOrEnd();
        }
    }, 1000);
}

function getNextQuestionOrEnd() {
    //check if there are remaining random array values and that the score is above zero
    if (randomOrder.length !== 0 && timeScore > 0) {
        //get last item and remove it from array
        var randomSelected = parseInt(randomOrder.pop());
        //add question to DOM
        question.innerHTML = questions[randomSelected].question;
        for (let i = 0; i < answers.length; i++) {
            //if there are more answers than HTML elements to use them, hide the HTML element and don't populate anything
            if (typeof questions[randomSelected].answers[i] === 'undefined') {
                answers[i].parentElement.classList.add('hide-element');
            } else {
                answers[i].innerHTML = questions[randomSelected].answers[i].textContent;
                answers[i].setAttribute("data-boolean", questions[randomSelected].answers[i].isCorrect);
                answers[i].parentElement.classList.remove('hide-element');
            }
        }
    } else { //else there are no more questions
        //if the final score goes below zero set to zero
        if (timeScore < 0) {
            timeScore = 0;
        }
        // show game over screen and set final score
        finalScore.innerHTML = timeScore;
        questionContainer.classList.add('hide-element');
        scoreContainer.classList.add('hide-element');
        gameOverContainer.classList.remove('hide-element');
        generateTable();
    }
}
