const startGameBtn = document.getElementById("start-game-btn");
const greetBtn = document.getElementById("greet-btn");

let gameStart = false;

function startGame() {
  if (!gameStart) {
    console.log("Starting game...");
    gameStart = true;
  }
}

const person = {
  name: "Max",
  greet: function greetAction(gameStatus) {
    if (gameStatus) {
      console.log(`Hello there ${this.name}`);
    } else {
      console.log("Please start the game first!");
    }
  },
};

startGameBtn.addEventListener("click", startGame);
greetBtn.addEventListener("click", () => {
  person.greet(gameStart);
});
