const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const VALID_CHOICES = [ROCK, PAPER, SCISSORS];
const MAX_WINS = 3;

// DOM references
const playerChoiceEl = document.getElementById("player-choice");
const cpuChoiceEl = document.getElementById("cpu-choice");
const playerScoreEl = document.getElementById("player-score");
const cpuScoreEl = document.getElementById("cpu-score");
const winnerDisplayEl = document.getElementById("winner-display");
const startGameBtn = document.getElementById("start-game-btn");
const enterChoiceBtn = document.getElementById("enter-choice-btn");
const resetGameBtn = document.getElementById("reset-game-btn");

// Game state
let playerScore = 0;
let cpuScore = 0;
let isGameActive = false;

const getPlayerChoice = function () {
  let selection;

  while (true) {
    selection = prompt("Enter: rock, paper or scissors.");

    if (!selection) {
      alert("Input cannot be empty. Try again.");
      continue;
    }

    const cleaned = selection.trim().toUpperCase();

    if (VALID_CHOICES.includes(cleaned)) {
      return cleaned;
    }

    alert(
      `"${selection}" is not valid. Please enter rock, paper, or scissors.`,
    );
  }
};

const getCpuChoice = function () {
  const randomIndex = Math.floor(Math.random() * 3);
  return VALID_CHOICES[randomIndex];
};

const determineWinner = function (playerChoice, cpuChoice) {
  if (playerChoice === cpuChoice) {
    return "draw";
  }

  if (
    (playerChoice === ROCK && cpuChoice === SCISSORS) ||
    (playerChoice === PAPER && cpuChoice === ROCK) ||
    (playerChoice === SCISSORS && cpuChoice === PAPER)
  ) {
    return "player";
  }

  return "cpu";
};

const updateUI = function (playerChoice, cpuChoice, winner) {
  playerChoiceEl.textContent = playerChoice;
  cpuChoiceEl.textContent = cpuChoice;
  playerChoiceEl.className = "value";
  cpuChoiceEl.className = "value";

  if (winner === "player") {
    winnerDisplayEl.textContent = "You win this round!";
    winnerDisplayEl.className = "win";
  } else if (winner === "cpu") {
    winnerDisplayEl.textContent = "CPU wins this round!";
    winnerDisplayEl.className = "lose";
  } else {
    winnerDisplayEl.textContent = "This round is a draw!";
    winnerDisplayEl.className = "draw";
  }
};

const checkGameOver = function () {
  if (playerScore >= MAX_WINS) {
    winnerDisplayEl.textContent = `🎉 YOU WIN THE GAME! ${playerScore} - ${cpuScore} 🎉`;
    winnerDisplayEl.className = "final";
    isGameActive = false;
    enterChoiceBtn.disabled = true;
    return true;
  }

  if (cpuScore >= MAX_WINS) {
    winnerDisplayEl.textContent = `💀 CPU WINS THE GAME! ${cpuScore} - ${playerScore} 💀`;
    winnerDisplayEl.className = "final";
    isGameActive = false;
    enterChoiceBtn.disabled = true;
    return true;
  }

  return false;
};

const resetGame = function () {
  playerScore = 0;
  cpuScore = 0;
  isGameActive = false;
  playerScoreEl.textContent = "0";
  cpuScoreEl.textContent = "0";
  playerChoiceEl.textContent = "—";
  cpuChoiceEl.textContent = "—";
  playerChoiceEl.className = "value pending";
  cpuChoiceEl.className = "value pending";
  winnerDisplayEl.textContent =
    'Click "Start Game" to begin a best of 3 match!';
  winnerDisplayEl.className = "info";
  startGameBtn.disabled = false;
  enterChoiceBtn.disabled = true;
};

const handleEnterChoice = function () {
  if (!isGameActive) return;

  const playerChoice = getPlayerChoice();
  if (!playerChoice) return;

  const cpuChoice = getCpuChoice();

  const winner = determineWinner(playerChoice, cpuChoice);

  if (winner === "player") {
    playerScore++;
    playerScoreEl.textContent = playerScore;
  } else if (winner === "cpu") {
    cpuScore++;
    cpuScoreEl.textContent = cpuScore;
  }

  updateUI(playerChoice, cpuChoice, winner);
  checkGameOver();
};

const startGame = function () {
  resetGame();
  isGameActive = true;
  startGameBtn.disabled = true;
  enterChoiceBtn.disabled = false;
  winnerDisplayEl.textContent =
    "Game started! Click 'Enter Choice' to make your move.";
  winnerDisplayEl.className = "info";
};

// Event listeners
startGameBtn.addEventListener("click", startGame);
enterChoiceBtn.addEventListener("click", handleEnterChoice);
resetGameBtn.addEventListener("click", resetGame);
