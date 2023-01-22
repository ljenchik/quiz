// List of scores
let listOfScores = document.querySelector("#highscores");
// Button to clear scores
let clearButton = document.querySelector("#clear");

function displayScores() {
  let highscoresStored = JSON.parse(localStorage.getItem("highscores"));
  if (highscoresStored !== null) {
    sortArray(highscoresStored);

    for (let i = 0; i < highscoresStored.length; i++) {
      let scoreEl = document.createElement("li");
      scoreEl.textContent =
        highscoresStored[i].initials + " " + highscoresStored[i].score;
      listOfScores.appendChild(scoreEl);
    }
  }
}

displayScores();

clearButton.addEventListener("click", function (event) {
    event.preventDefault();
    clearScores();
  });
  
// Helper functions

function clearScores() {
  localStorage.clear();
  listOfScores.textContent = "";
}

function sortArray(array) {
  array.sort(function (a, b) {
    if (a.score === b.score) {
      return a.city > b.city ? 1 : -1;
    }
    return b.score - a.score;
  });
}

