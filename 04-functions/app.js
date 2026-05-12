const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const possibleChoices = [ROCK, PAPER, SCISSORS];
const USER_CANCELLED = "USER CANCELLED";
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WINS = "PLAYER_WINS";
const RESULT_COMPUTER_WINS = "COMPUTER_WINS";

let gameIsRunning = false;

const getPlayerChoice = () => {
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

const getComputerChoice = () => {
  const randomIndex = Math.floor(Math.random() * possibleChoices.length);
  return possibleChoices[randomIndex];
};

const getWinner = function (playerChoice, computerChoice) {
  if (playerChoice === USER_CANCELLED) return "nobody won, user cancelled";
  if (playerChoice === computerChoice) return RESULT_DRAW;
  if (
    (playerChoice === ROCK && computerChoice === SCISSORS) ||
    (playerChoice === PAPER && computerChoice === ROCK) ||
    (playerChoice === SCISSORS && computerChoice === PAPER)
  ) {
    return RESULT_PLAYER_WINS;
  }
  return RESULT_COMPUTER_WINS;
};

startGameBtn.addEventListener("click", () => {
  // check if the game is running
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log("Game is starting...");
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  const winner = getWinner(playerChoice, computerChoice);
  let message;
  if (winner === RESULT_DRAW) {
    message = `DRAW => Player:${playerChoice}, CPU:${computerChoice}`;
  } else if (winner === RESULT_COMPUTER_WINS) {
    message = `CPU WINS => Player:${playerChoice}, CPU:${computerChoice}`;
  } else {
    message = `PLAYER WINS => Player:${playerChoice}, CPU:${computerChoice}`;
  }
  console.log(message);
  gameIsRunning = false;
});

// not related to the game
// add as many arg as you want and build a sum for them
// REST operator must be the last parameter
// const sumUp = (startingSum, ...numbers) => {
//   // validateNumber is only available in sumUp
//   const validateNumber = (number) => (isNaN(number) ? 0 : number);
//   for (const num of numbers) {
//     startingSum += validateNumber(num);
//   }
//   return startingSum;
// };

// resultHandler is a callback function
const sumUp = (resultHandler, ...numbers) => {
  // validateNumber is only available in sumUp
  const validateNumber = (number) => (isNaN(number) ? 0 : number);
  let sum = 0;
  for (const num of numbers) {
    sum += validateNumber(num);
  }
  resultHandler(sum);
};

const showResult = (result) => {
  console.log(`The result after adding all numbers is: ${result}`);
};

sumUp(showResult, 100, 4, -7, 77, "P", -6, 8);
sumUp(showResult, 0, 4, -7, 77, "P", -6, 8);
