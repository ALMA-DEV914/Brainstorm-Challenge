var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('timer');

var number =
  '30 29 28 27 26 25 24 23 22 21 20 19 18 17 16 15 14 13 12 11 10 9 8 7 6 5 4 3 2 1 0';
var timer = number.split(" ");

function countdown() {
  var timeLeft = 5;

  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function() {
    timerEl.textContent = "";
    timeLeft--;
    if(timeLeft < 0){
     clearInterval(timeInterval)
    }
     displayTimer();

  }, 1000);
  
}

mainEl.setAttribute("style", "color: #8a0b1c; font-size: 25px;");

// Displays the number one word at a time
function displayTimer() {
    var numberCount = 0;
  
    // Uses the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var queInterval = setInterval(function() {
      
      if (timer[numberCount] === undefined) {
        // Use `clearInterval()` to stop the timer
        clearInterval(queInterval);
      } else {
        mainEl.textContent = timer[numberCount];
        numberCount++;
      }
    }, 1000);
  }
  
  countdown();

  function myFunction(){
    onclick = document.getElementById("que").style.display = "none";
    onclick = document.getElementById("que1").style.display = "block";
      
 }