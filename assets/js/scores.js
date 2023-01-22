// Highscores
let listOfScores = document.querySelector("#highscores");

function displayScores() {
  let highscoresStored = JSON.parse(localStorage.getItem("highscores"));
  console.log(highscoresStored);
  for (let i = 0; i < highscoresStored.length; i++) {
    let scoreEl = document.createElement("li");
    scoreEl.textContent =
      highscoresStored[i].initials + " " + highscoresStored[i].score;
      console.log(scoreEl);
    listOfScores.appendChild(scoreEl);
  }
}

displayScores();