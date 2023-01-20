let timerEl = document.querySelector("#time");
let startButton = document.querySelector("#start");
let questionTitle = document.querySelector("#question-title");
let choices = document.querySelector("#choices");
let questionSection = document.querySelector("#questions");
let endOfQuizMessage = document.querySelector("#end-screen");

let nextButton = document.createElement("button");
nextButton.textContent = "Next";
questionSection.appendChild(nextButton); 

let secondsLeft = 75;
let score = 0;
let clicked = false;

function renderQuestionTitle(currentQuestion) {
  questionTitle.innerHTML = "";
  questionTitle.textContent = questions[currentQuestion][0];
}

function renderAnswers(currentQuestion) {
  choices.innerHTML = "";
  for (let j = 0; j < questions[currentQuestion][1].length; j++) {
    let answerEl = document.createElement("button");
    answerEl.setAttribute("data-index", j);
    answerEl.textContent = questions[currentQuestion][1][j];
    choices.appendChild(answerEl);

    answerEl.addEventListener("click", function (event) {
      event.preventDefault();
      let message = document.createElement("h4");
      choices.appendChild(message);

      if (
        parseInt(answerEl.getAttribute("data-index")) ===
        questions[currentQuestion][2]
      ) {
        message.textContent = "Correct!";
        score++;
        console.log(score);
      } else {
        message.textContent = "Wrong!";
        secondsLeft -= 10;
      }
    });
  }
}

function renderQuestion(currentQuestion) {
  document.querySelector("#end-screen").classList.add("hide");
  document.querySelector("#questions").classList.remove("hide");
  renderQuestionTitle(currentQuestion);
  renderAnswers(currentQuestion);
  nextButton.addEventListener('click', function(event) {
    event.preventDefault();
    if (currentQuestion + 1 < questions.length) {
      renderQuestion(currentQuestion + 1);
    }
    else {
      document.querySelector("#questions").classList.add("hide");
      document.querySelector("#end-screen").classList.remove("hide");
    }
  });
}

startButton.addEventListener("click", function (event) {
  event.preventDefault();
  renderQuestion(0);
  // Sets interval in variable
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timerEl.textContent = secondsLeft;
    if (secondsLeft === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
});

//renderQuestion(0);




