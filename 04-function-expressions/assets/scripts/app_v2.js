const startGameBtn = document.getElementById("start-game-btn");
const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";

const VALID_CHOICES = [ROCK, PAPER, SCISSORS];

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

getPlayerChoice();
