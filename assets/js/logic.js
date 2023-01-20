let timerEl = document.querySelector("#time");
let startButton = document.querySelector("#start");
let questionTitle = document.querySelector("#question-title");
let choices = document.querySelector("#choices");
document.querySelector("#questions").classList.add("hide");

let secondsLeft = 75;
let score = 0;
let clicked = false;


function renderAnswers(currentQuestion) {
  document.querySelector("#questions").classList.remove("hide");
  for (let j = 0; j < questions[currentQuestion][1].length; j++) {
    
    let answerEl = document.createElement("button");
    answerEl.setAttribute("data-index", j);
    answerEl.textContent = questions[currentQuestion][1][j];
    choices.appendChild(answerEl);

    answerEl.addEventListener("click", function (event) {
      event.preventDefault();
      let message = document.createElement("h4");
      choices.appendChild(message);
      
      if (parseInt(answerEl.getAttribute("data-index")) === questions[currentQuestion][2]) {
        message.textContent = "Correct!";
        score++;
        
      } else {
        message.textContent = "Wrong!";
        secondsLeft -= 10;
      }
    });
  }
}



function renderQuestion(currentQuestion) {
  document.querySelector("#questions").classList.remove("hide");
  questionTitle.textContent = questions[currentQuestion][0];

  renderAnswers(currentQuestion);
  clicked = true;
}


startButton.addEventListener("click", function (event) {
  event.preventDefault();
  for (let i = 0; i < questions.length; i++) {
    questionTitle.classList.add("hide");
    choices.classList.add("hide");

    //renderQuestion(i);
  }
   // Sets interval in variable
   var timerInterval = setInterval(function () {
    secondsLeft--;
    timerEl.textContent = secondsLeft;
    if (secondsLeft === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);

});


// renderQuestion(0);
// if (clicked) {
//    renderQuestion(1);
// }

renderQuestion(0);
//renderAnswers(1);