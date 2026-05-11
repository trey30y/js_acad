const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const possibleChoices = [ROCK, PAPER, SCISSORS];
const USER_CANCELLED = "USER CANCELLED";

let gameIsRunning = false;

const getPlayerChoice = function () {
  while (true) {
    // If the user clicks __Cancel__ on the prompt dialog, `prompt()` returns `null`.
    const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, "");
    if (selection === null) return USER_CANCELLED;
    const cleanedSelection = selection.toUpperCase().trim();
    if (possibleChoices.includes(cleanedSelection)) {
      return cleanedSelection;
    }
    alert("Invalid Choice");
  }
};

const getComputerChoice = function () {
  const randomIndex = Math.floor(Math.random() * possibleChoices.length);
  return possibleChoices[randomIndex];
};

const getWinner = function (playerChoice, computerChoice) {
  gameIsRunning = false;
  if (playerChoice === USER_CANCELLED) return "nobody won, user cancelled";
  if (playerChoice === computerChoice) return "draw";
  if (
    (playerChoice === ROCK && computerChoice === SCISSORS) ||
    (playerChoice === PAPER && computerChoice === ROCK) ||
    (playerChoice === SCISSORS && computerChoice === PAPER)
  ) {
    return "player won";
  }
  return "computer won";
};

startGameBtn.addEventListener("click", function () {
  // check if the game is running
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log("Game is starting...");
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  console.log(`player: ${playerChoice}`);
  console.log(`computer: ${computerChoice}`);
  console.log(getWinner(playerChoice, computerChoice));
});
