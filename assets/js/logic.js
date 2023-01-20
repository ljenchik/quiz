let timerEl = document.querySelector("#time");
let startButton = document.querySelector("#start");
let questionTitle = document.querySelector("#question-title");
let choices = document.querySelector("#choices");

let secondsLeft = 75;
let numberOfQuestions = questions.length;
let index = 0;

function renderQuestion() {
  document.querySelector("#questions").classList.remove("hide");
  questionTitle.textContent = questions[index][0];

  for (let j = 0; j < questions[index][1].length; j++) {
    let answerEl = document.createElement("button");
    answerEl.setAttribute("data-index", j);
    answerEl.textContent = questions[index][1][j];
    choices.appendChild(answerEl);

    answerEl.addEventListener("click", function (event) {
      event.preventDefault();

      let message = document.createElement("h4");
      choices.appendChild(message);

      console.log(answerEl.getAttribute("data-index"));

      if (parseInt(answerEl.getAttribute("data-index")) === questions[0][2]) {
        message.textContent = "Correct!";
      } else {
        message.textContent = "Wrong!";
      }
    });
  }
}

startButton.addEventListener("click", function (event) {
  event.preventDefault();
  renderQuestion();
  // Sets interval in variable
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timerEl.textContent = secondsLeft;
    if (secondsLeft === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
});

