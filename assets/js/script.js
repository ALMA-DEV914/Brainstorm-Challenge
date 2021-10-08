var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('timer');
var question1 = document.getElementById("question1");
var question2 = document.getElementById("question2");
var scoreEl = document.getElementById("score");
scoreEl.textContent = answer + " out of 5";

// give styles to the following attributes
scoreEl.setAttribute("style", "color: #8a0b1c;");
timerEl.setAttribute("style", "color: #8a0b1c; font-size: 25px;");
mainEl.setAttribute("style", "color: blue;");
document.getElementById("score").style.color = "blue";

//function to set the timer
function countdown() {
    var timeLeft = 30;
  
    // Use the `setInterval()` method to call a function to be executed every 2000 milliseconds
    var timeInterval = setInterval(function() {
      timerEl.textContent = timeLeft;
      timeLeft--;
      if(timeLeft < 0){
          clearInterval(timeInterval);
          alert("Game over!");
       } 
  
      }, 1000);
  }
  
  countdown();
var questions = ['question1', 'question2', 'question3', 'question4', 'question5'];

var answer = ['b', 'c','c', 'a', 'b'];
for (var i = 0; i < questions.length; i++) {
    score += scoreCount() ;
}
// function for the questions and answer
var question1 = {
    question1: questions[i],
    answer: b,
    answer: function(){
        if(answer === 'b'){
            localStorage.getItem("answer", JSON.stringify("answer"));
        } else if (answer != 'b'){
            var timeLeft = timeLeft - 3;
            alert(timeLeft - 3 + "seconds remaining");
        } else {  
           return this.answer;
        }
    }
}

var question2 = {
    question2: questions[i],
    answer: c,
    answer: function(){
        if(answer === 'c') {
            localStorage.getItem("answer", JSON.stringify("answer"));
        } else if (answer != 'c'){
           var timeLeft = timeLeft - 3;
            alert(timeLeft - 3 + "seconds remaining");
            
        } else {
            return this. answer;
            
        }
    }
}
var question3 = {
    question3: questions[i],
    answer: c,
    answer: function(){
        if(answer === 'c'){
            localStorage.getItem("answer", JSON.stringify("answer"));
        } else if (answer != 'c'){
            var timeLeft = timeLeft - 3;
            alert(timeLeft - 3 + "seconds remaining");
            return question3();
        } else{
             myFunction4();
        }
    }
}
var question4 = {
    question4: questions[i],
    answer: a,
    answer: function(){
        if(answer === 'a') {
            localStorage.getItem("answer", JSON.stringify("answer"));
        } else if (answer != 'a'){
            var timeLeft = timeLeft - 3;
            alert(timeLeft - 3 + "seconds remaining");
        }else{
            myFunction5();
        }
    }
}
var question5 =  {
    question5: questions[i],
    answer: b,
    answer: function(){
        if(answer === 'b'){
            localStorage.getItem("answer", JSON.stringify("answer"));
        } else if (answer != 'b'){
            var timeLeft = timeLeft - 3;
            alert(timeLeft - 3 + "seconds remaining");
        }else{
           myFunction6();
        }
    }
}

// function to count the correct answers and wrong answer and reduce the timer
var scoreCount = function() {
    var score = answer[i] + 1;
   if (score === '[0]'){
       
   }
 
}

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
   
  