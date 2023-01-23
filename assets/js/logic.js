// Header
let timerEl = document.querySelector("#time");
let scoreEl = document.querySelector("#score");

// Start button
let startButton = document.querySelector("#start");

// Question and answers section
let questionTitle = document.querySelector("#question-title");
let choices = document.querySelector("#choices");
let questionSection = document.querySelector("#questions");

// End of quiz
let endOfQuizMessage = document.querySelector("#end-screen");
let finalScore = document.querySelector("#final-score");
let initialsInput = document.querySelector("#initials");
let submitButton = document.querySelector("#submit");
let submitMessage = document.createElement("h4");
let feedback = document.querySelector("#feedback");

let regexInitials = /[a-zA-Z]/g;

let highscores = [];
let score = 0;
let timer;
let secondsLeft;
let randomQuestions = [];
 

// Choose 5  differentrandom questions from the questions array
while (randomQuestions.length < 5) {
  let randomQuestion = questions[Math.floor(Math.random() * questions.length)];
  if (randomQuestions.includes(randomQuestion) === false) {
    randomQuestions.push(randomQuestion);
  }
}
  
startButton.addEventListener("click", startQuiz);

function startQuiz() {
  secondsLeft = 75;
  startButton.disabled = true;
  startTimer();
  init();
}

function startTimer() {
  timer = setInterval(function () {
    secondsLeft--;
    timerEl.textContent = secondsLeft;
    if (secondsLeft <= 0) {
      clearInterval(timer);
      timerEl.textContent = 0;
    }
  }, 1000);
}

function init() {
  endOfQuizMessage.classList.add("hide");
  feedback.classList.add("hide");
  questionSection.classList.remove("hide");

  let storedScores = JSON.parse(localStorage.getItem("highscores"));
  if (storedScores !== null) {
    highscores = storedScores;
  }
  renderQuestion(0);
}

function renderAnswers(currentQuestion) {
  choices.innerHTML = "";

  for (let j = 0; j < randomQuestions[currentQuestion][1].length; j++) {
    let answerEl = document.createElement("button");
    answerEl.setAttribute("data-index", j);
    answerEl.textContent = randomQuestions[currentQuestion][1][j];
    choices.appendChild(answerEl);

    answerEl.addEventListener("click", function (event) {
      event.preventDefault();

      let message = document.createElement("h4");
      if (
        parseInt(answerEl.getAttribute("data-index")) ===
        randomQuestions[currentQuestion][2]
      ) {
       
        message.textContent = "Correct!";
        score++;
        scoreEl.textContent = score.toString();
      } else {
       
        message.textContent = "Wrong!";
        secondsLeft -= 10;
      }

      feedback.classList.remove("hide");

      //feedback.appendChild(message);
      feedback.innerHTML = message.textContent;

      // Delay to see a question feedback before moving to the next question
      setTimeout(function () {
        feedback.innerHTML = "";
        feedback.classList.add("hide");
      }, 1200);

      renderQuestion(currentQuestion + 1);
    });
  }
}

function renderQuestion(currentQuestion) {
  // Render question title
  if (currentQuestion < randomQuestions.length && secondsLeft > 0) {
    questionTitle.innerHTML = "";
    questionTitle.textContent = `${currentQuestion + 1}. ${
      randomQuestions[currentQuestion][0]
    }`;

    renderAnswers(currentQuestion);
  } else {
    questionSection.classList.add("hide");
    feedback.classList.remove("hide");
    endOfQuizMessage.classList.remove("hide");
    secondsLeft = 0;
    finalScore.textContent = score;
  }
}

// Delete feedback from the last question
initialsInput.addEventListener("click", function (event) {
  event.preventDefault();
  feedback.classList.add("hide");
  initialsInput.value = "";
});

submitButton.addEventListener("click", function (event) {
  event.preventDefault();


  let player = {
    initials: initialsInput.value.trim().toUpperCase(),
  };

  if (!player.initials || player.initials.length !== 2 || !player.initials.match(regexInitials)) {
    feedback.classList.remove("hide");
    feedback.textContent = "Please enter your initials (two letters)";
  } else {
    player.score = score;
    highscores.push(player);
    localStorage.setItem("highscores", JSON.stringify(highscores));
    window.location.href = "highscores.html";
  }
});



