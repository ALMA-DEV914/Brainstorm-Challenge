var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('timer');
var question1 = document.getElementById("question1");
var question2 = document.getElementById("question2");
var scoreEl = document.getElementById("score");

// function for the questions and answer
var questions = {
    question: [i],
    answer: 2,
    length: 5,
    answer: function(){
        if(answer === "click"){
            localStorage.getItem("answer", JSON.parse("answer"));
        }
        return this.answer;
    }
}

// function to count the correct answers and wrong answer and reduce the timer
for (var i = 0; i < questions.length; i++) {
    answer += questions[i];
var answer = function() {
        if (answer === ckecked){
            
        } else if (question1 != checked){
            alert("Your answer is wrong, 5 seconds is deducted from your time left.");
            timerEl = timeLeft - 5;
        } else{
            localStorage.setItem("checked", JSON.stringify("checked"));
        }
        localStorage.getItem("answers", JSON.parse("answers"));
    };
  }

//function to set the timer
function countdown() {
  var timeLeft = 60;

  // Use the `setInterval()` method to call a function to be executed every 2000 milliseconds
  var timeInterval = setInterval(function() {
    timerEl.textContent = timeLeft;
    timeLeft--;
    if(timeLeft < 0){
        clearInterval(timeInterval);
        alert("Game over!");
     } 

}, 2000);
  
}

scoreEl.setAttribute("style", "color: #8a0b1c;");
timerEl.setAttribute("style", "color: #8a0b1c; font-size: 25px;");
mainEl.setAttribute("style", "color: blue;");
  
// function to hide and show all questions sections
  function myFunction(){
    onclick = document.getElementById("que").style.display = "none";
    onclick = document.getElementById("que1").style.display = "block";
    onclick = document.getElementById("question2").style.display = "none";
    
  }
  function myFunction2(){
      onclick = document.getElementById("question1").style.display = "none";
     onclick = document.getElementById("que1").style.display = "block";
    onclick = document.getElementById("question2").style.display = "block";
  }
function myFunction3(){
    onclick = document.getElementById("que").style.display = "none";
    onclick = document.getElementById("question2").style.display = "none";
    onclick = document.getElementById("que1").style.display = "block";
    onclick = document.getElementById("question3").style.display = "block";
  }
  function myFunction4(){
    onclick = document.getElementById("que").style.display = "none";
    onclick = document.getElementById("question2").style.display = "none";
    onclick = document.getElementById("que1").style.display = "block";
    onclick = document.getElementById("question3").style.display = "none";
    onclick = document.getElementById("question4").style.display = "block";
  }
  function myFunction5(){
     onclick = document.getElementById("que").style.display = "none";
     onclick = document.getElementById("question2").style.display = "none";
     onclick = document.getElementById("que1").style.display = "block";
     onclick = document.getElementById("question3").style.display = "none";
     onclick = document.getElementById("question4").style.display = "none";
     onclick = document.getElementById("question5").style.display = "block";
   }

   function myFunction6(){
       onclick = document.getElementById("score").style.display = "block";
   }
   document.getElementById("score").innerHTML = "3 out of 5"
  countdown();