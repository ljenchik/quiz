let timerEl = document.querySelector("#time");
let scoreEl = document.querySelector("#score");
let finalScore = document.querySelector("#final-score");
let startButton = document.querySelector("#start");
let questionTitle = document.querySelector("#question-title");
let choices = document.querySelector("#choices");
let questionSection = document.querySelector("#questions");
let endOfQuizMessage = document.querySelector("#end-screen");
let submitButton = document.querySelector("#submit");
let initialsInput = document.querySelector("#initials");
let scores = {};

let nextButton = document.createElement("button");
nextButton.textContent = "Next";
questionSection.appendChild(nextButton); 

let secondsLeft = 10;
let score = 0;

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
        scoreEl.textContent = score.toString();
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
    if (secondsLeft <= 0 || currentQuestion + 1 >= questions.length) {
      document.querySelector("#questions").classList.add("hide");
      document.querySelector("#end-screen").classList.remove("hide");
      finalScore.textContent = score;
    }
    else {
      renderQuestion(currentQuestion + 1);
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
    if (secondsLeft <= 0) {
      clearInterval(timerInterval);
      timerEl.textContent = 0;
    }
  }, 1000);
});


submitButton.addEventListener("click", function (event) {
  event.preventDefault();

  var player = {
    initials: initialsInput.value.trim(),
    score: 0
  };
  player.score = score;
  localStorage.setItem("player", JSON.stringify(player));
});


