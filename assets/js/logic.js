// Header
let timerEl = document.querySelector("#time");
let scoreEl = document.querySelector("#score");
// Question and answers
let startButton = document.querySelector("#start");
let questionTitle = document.querySelector("#question-title");
let choices = document.querySelector("#choices");
let questionSection = document.querySelector("#questions");
// Next button
let nextButton = document.createElement("button");
nextButton.textContent = "Next";
questionSection.appendChild(nextButton);
// End of quiz
let endOfQuizMessage = document.querySelector("#end-screen");
let finalScore = document.querySelector("#final-score");
let initialsInput = document.querySelector("#initials");
let submitButton = document.querySelector("#submit");
let submitMessage = document.createElement("h4");
let feedback = document.querySelector("#feedback");

let secondsLeft = 10;
let score = 0;

function renderQuestionTitle(currentQuestion) {
  questionTitle.innerHTML = "";
  questionTitle.textContent = questions[currentQuestion][0];
}

function renderAnswers(currentQuestion) {
  choices.innerHTML = "";
  feedback.innerHTML = "";

  for (let j = 0; j < questions[currentQuestion][1].length; j++) {
    let answerEl = document.createElement("button");
    answerEl.setAttribute("data-index", j);
    answerEl.textContent = questions[currentQuestion][1][j];
    choices.appendChild(answerEl);

    answerEl.addEventListener("click", function (event) {
      event.preventDefault();
      feedback.classList.remove("hide");
      let message = document.createElement("h4");
      feedback.appendChild(message);

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
  feedback.classList.add("hide");
}

function renderQuestion(currentQuestion) {
  endOfQuizMessage.classList.add("hide");
  questionSection.classList.remove("hide");
  feedback.classList.add("hide");

  feedback.innerHTML = "";

  renderQuestionTitle(currentQuestion);
  renderAnswers(currentQuestion);

  nextButton.addEventListener("click", function (event) {
    event.preventDefault();
    if (secondsLeft <= 0 || currentQuestion + 1 >= questions.length) {
      questionSection.classList.add("hide");
      endOfQuizMessage.classList.remove("hide");
      finalScore.textContent = score;
    } else {
      renderQuestion(currentQuestion + 1);
    }
  });
}

startButton.addEventListener("click", function (event) {
  event.preventDefault();
  scoreEl.textContent = 0;
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
  feedback.classList.add("hide");
  var player = {
    initials: initialsInput.value.trim(),
    score: 0,
  };

  feedback.classList.remove("hide");
  feedback.innerHTML = "";

  if (!player.initials) {
    endOfQuizMessage.textContent = "Enter your initials";
  } else {
    endOfQuizMessage.textContent = "Thank you, your score is saved";
  }
  feedback.appendChild(endOfQuizMessage);
  player.score = score;
  localStorage.setItem("player", JSON.stringify(player));
});
