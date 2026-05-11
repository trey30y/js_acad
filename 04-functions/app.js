const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";

let gameIsRunning = false;

const getPlayerChoice = function () {
  let cleanedSelection;
  while (true) {
    // If the user clicks __Cancel__ on the prompt dialog, `prompt()` returns `null`.
    const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, "");
    if (selection === null) return "User Cancelled";
    const cleanedSelection = selection.toUpperCase().trim();
    if ([ROCK, PAPER, SCISSORS].includes(cleanedSelection)) {
      return cleanedSelection;
    }
    alert("Invalid Choice");
  }
};

startGameBtn.addEventListener("click", function () {
  // check if the game is running
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log("Game is starting...");
  const playerSelection = getPlayerChoice();
  console.log(playerSelection);
});
