const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 15;
const MONSTER_ATTACK_VALUE = 10;
const HEAL_VALUE = 10;

const MAX_STRONG_ATTACKS = 2;
const MAX_HEALS = 2;

const MODE_ATTACK = "ATTACK";
const STRONG_ATTACK = "STRONG_ATTACK";
const LOG_EVENT_PLAYER_ATTACK = "PLAYER_ATTACK";
const LOG_EVENT_MONSTER_ATTACK = "MONSTER_ATTACK";
const LOG_EVENT_PLAYER_HEAL = "PLAYER_HEAL";
const LOG_EVENT_PLAYER_STRONG_ATTACK = "PLAYER_STRONG_ATTACK";
const LOG_EVENT_GAME_OVER = "GAME_OVER";

let chosenMaxLife = 100;

let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;
let battleLog = [];
let remainingStrongAttacks = MAX_STRONG_ATTACKS;
let remainingHeals = MAX_HEALS;
let lastLoggedEntry = 0;

adjustHealthBars(chosenMaxLife);
updateRemainingCounts(
  remainingStrongAttacks,
  MAX_STRONG_ATTACKS,
  remainingHeals,
  MAX_HEALS,
);

function writeToLog(event, value, monsterHealth, playerHealth) {
  let logEntry;
  // Convert value to a number in case it's a string
  const numericValue = Number(value);

  // Check if numericValue is a valid number before calling .toFixed()
  const formattedValue = !isNaN(numericValue)
    ? numericValue.toFixed(2)
    : "0.00";

  logEntry = {
    event: event,
    // the amount of attack, heal, etc
    value: formattedValue,
    finalMonsterHealth: +monsterHealth.toFixed(2),
    finalPlayerHealth: +playerHealth.toFixed(2),
  };
  battleLog.push(logEntry);
}

function reset() {
  currentMonsterHealth = chosenMaxLife;
  currentPlayerHealth = chosenMaxLife;
  remainingStrongAttacks = MAX_STRONG_ATTACKS;
  remainingHeals = MAX_HEALS;
  resetLifeBars(chosenMaxLife);
  updateRemainingCounts(
    remainingStrongAttacks,
    MAX_STRONG_ATTACKS,
    remainingHeals,
    MAX_HEALS,
  );
  lastLoggedEntry = 0;
  console.clear();
}

function endRound() {
  const initialPlayerHealth = currentPlayerHealth;
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;
  writeToLog(
    LOG_EVENT_MONSTER_ATTACK,
    playerDamage,
    currentMonsterHealth,
    currentPlayerHealth,
  );

  if (currentPlayerHealth <= 0 && hasBonusLife) {
    hasBonusLife = false;
    removeBonusLife();
    currentPlayerHealth = initialPlayerHealth;
    setPlayerHealth(initialPlayerHealth);
    alert("You would be dead but the bonus life saved you!");
  }

  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    writeToLog(
      LOG_EVENT_GAME_OVER,
      "PLAYER WON",
      currentMonsterHealth,
      currentPlayerHealth,
    );
    reset();
    alert("You won!");
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    writeToLog(
      LOG_EVENT_GAME_OVER,
      "MONSTER WON",
      currentMonsterHealth,
      currentPlayerHealth,
    );
    reset();
    alert("You lost!");
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
    writeToLog(
      LOG_EVENT_GAME_OVER,
      "DRAW GAME",
      currentMonsterHealth,
      currentPlayerHealth,
    );
    reset();
    alert("You have a draw!");
  }
}

function attackMonster(mode) {
  let maxDamage = mode === MODE_ATTACK ? ATTACK_VALUE : STRONG_ATTACK_VALUE;
  let logEvent =
    mode === MODE_ATTACK
      ? LOG_EVENT_PLAYER_ATTACK
      : LOG_EVENT_PLAYER_STRONG_ATTACK;

  // damage returns the dealt damagage
  const damage = dealMonsterDamage(maxDamage);
  currentMonsterHealth -= damage;
  writeToLog(logEvent, damage, currentMonsterHealth, currentPlayerHealth);
  endRound();
}

function attackHandler() {
  attackMonster(MODE_ATTACK);
}

function strongAttackHandler() {
  if (remainingStrongAttacks <= 0) return;
  remainingStrongAttacks--;
  attackMonster(STRONG_ATTACK);
  updateRemainingCounts(
    remainingStrongAttacks,
    MAX_STRONG_ATTACKS,
    remainingHeals,
    MAX_HEALS,
  );
}

function healPlayerHandler() {
  if (remainingHeals <= 0) return;
  remainingHeals--;
  let healValue;
  if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
    alert("You can't heal to more than your max initial health.");
    healValue = chosenMaxLife - currentPlayerHealth;
  } else {
    healValue = HEAL_VALUE;
  }
  increasePlayerHealth(healValue);
  currentPlayerHealth += healValue;
  writeToLog(
    LOG_EVENT_PLAYER_HEAL,
    healValue,
    currentMonsterHealth,
    currentPlayerHealth,
  );
  endRound();
  updateRemainingCounts(
    remainingStrongAttacks,
    MAX_STRONG_ATTACKS,
    remainingHeals,
    MAX_HEALS,
  );
}

function printLastLoggedEntry() {
  for (let i = lastLoggedEntry; i < battleLog.length; i++) {
    console.log(displayLog(battleLog[i]));
  }
  lastLoggedEntry = battleLog.length;
}

function displayLog(log) {
  let detailedLog = "";
  for (let key in log) {
    switch (key) {
      case "event":
        detailedLog += `${log[key]} with `;
        break;
      case "value":
        detailedLog += isNaN(parseFloat(log[key]))
          ? `${log[key]}`
          : `${parseFloat(log[key]).toFixed(2)}, `;
        break;
      case "finalMonsterHealth":
        detailedLog += `monster: ${log[key]}, `;
        break;
      case "finalPlayerHealth":
        detailedLog += `player: ${log[key]}`;
        break;
    }
  }
  return detailedLog;
}

attackBtn.addEventListener("click", attackHandler);
strongAttackBtn.addEventListener("click", strongAttackHandler);
healBtn.addEventListener("click", healPlayerHandler);
logBtn.addEventListener("click", printLastLoggedEntry);
