const monsterHealthBar = document.getElementById("monster-health");
const playerHealthBar = document.getElementById("player-health");
const monsterHealthText = document.getElementById("monster-health-text");
const playerHealthText = document.getElementById("player-health-text");
const bonusLifeEl = document.getElementById("bonus-life");

const attackBtn = document.getElementById("attack-btn");
const strongAttackBtn = document.getElementById("strong-attack-btn");
const healBtn = document.getElementById("heal-btn");
const logBtn = document.getElementById("log-btn");

function updateHealthText() {
  monsterHealthText.textContent =
    Math.round(+monsterHealthBar.value) + " / " + monsterHealthBar.max;
  playerHealthText.textContent =
    Math.round(+playerHealthBar.value) + " / " + playerHealthBar.max;
}

function adjustHealthBars(maxLife) {
  monsterHealthBar.max = maxLife;
  monsterHealthBar.value = maxLife;
  playerHealthBar.max = maxLife;
  playerHealthBar.value = maxLife;
  updateHealthText();
}

function dealMonsterDamage(damage) {
  const dealtDamage = Math.random() * damage;
  monsterHealthBar.value = +monsterHealthBar.value - dealtDamage;
  updateHealthText();
  return dealtDamage;
}

function dealPlayerDamage(damage) {
  const dealtDamage = Math.random() * damage;
  playerHealthBar.value = +playerHealthBar.value - dealtDamage;
  updateHealthText();
  return dealtDamage;
}

function increasePlayerHealth(healValue) {
  playerHealthBar.value = +playerHealthBar.value + healValue;
  updateHealthText();
}

function resetGame(value) {
  playerHealthBar.value = value;
  monsterHealthBar.value = value;
  updateHealthText();
}

function removeBonusLife() {
  bonusLifeEl.parentNode.removeChild(bonusLifeEl);
}

function setPlayerHealth(health) {
  playerHealthBar.value = health;
  updateHealthText();
}

function updateRemainingCounts(strongLeft, strongMax, healLeft, healMax) {
  strongAttackBtn.innerHTML =
    "STRONG ATTACK <span class='btn-count'>" +
    strongLeft +
    " of " +
    strongMax +
    "</span>";
  healBtn.innerHTML =
    "HEAL <span class='btn-count'>" + healLeft + " of " + healMax + "</span>";
}
