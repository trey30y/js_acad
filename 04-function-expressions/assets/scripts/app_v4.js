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
const resetGameBtn = document.getElementById("reset-game-btn");
const btnRock = document.getElementById("btn-rock");
const btnPaper = document.getElementById("btn-paper");
const btnScissors = document.getElementById("btn-scissors");
const choiceBtns = [btnRock, btnPaper, btnScissors];

const CHOICE_MAP = {
  "btn-rock": ROCK,
  "btn-paper": PAPER,
  "btn-scissors": SCISSORS,
};

// Game state
let playerScore = 0;
let cpuScore = 0;
let isGameActive = false;

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

const displayChoiceName = function (choice) {
  const names = {
    ROCK: "🪨 Rock",
    PAPER: "📄 Paper",
    SCISSORS: "✂️ Scissors",
  };
  return names[choice] || choice;
};

const enableChoiceButtons = function () {
  choiceBtns.forEach(function (btn) {
    btn.disabled = false;
    btn.classList.remove("selected");
  });
};

const disableChoiceButtons = function () {
  choiceBtns.forEach(function (btn) {
    btn.disabled = true;
    btn.classList.remove("selected");
  });
};

const updateUI = function (playerChoice, cpuChoice, winner) {
  playerChoiceEl.textContent = displayChoiceName(playerChoice);
  cpuChoiceEl.textContent = displayChoiceName(cpuChoice);
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
    winnerDisplayEl.textContent =
      "🎉 YOU WIN THE GAME! " + playerScore + " - " + cpuScore + " 🎉";
    winnerDisplayEl.className = "final";
    isGameActive = false;
    disableChoiceButtons();
    return true;
  }

  if (cpuScore >= MAX_WINS) {
    winnerDisplayEl.textContent =
      "💀 CPU WINS THE GAME! " + cpuScore + " - " + playerScore + " 💀";
    winnerDisplayEl.className = "final";
    isGameActive = false;
    disableChoiceButtons();
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
  disableChoiceButtons();
};

const handleChoice = function (clickedBtn) {
  if (!isGameActive) return;

  const playerChoice = CHOICE_MAP[clickedBtn.id];

  // Disable all buttons and highlight the selected one
  choiceBtns.forEach(function (btn) {
    btn.disabled = true;
    if (btn === clickedBtn) {
      btn.classList.add("selected");
    }
  });

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

  if (!checkGameOver()) {
    enableChoiceButtons();
  }
};

const startGame = function () {
  resetGame();
  isGameActive = true;
  startGameBtn.disabled = true;
  enableChoiceButtons();
  winnerDisplayEl.textContent =
    "Game started! Click a button to make your move.";
  winnerDisplayEl.className = "info";
};

// Event listeners
startGameBtn.addEventListener("click", startGame);
resetGameBtn.addEventListener("click", resetGame);
btnRock.addEventListener("click", function () {
  handleChoice(btnRock);
});
btnPaper.addEventListener("click", function () {
  handleChoice(btnPaper);
});
btnScissors.addEventListener("click", function () {
  handleChoice(btnScissors);
});
