const defaultResult = 0;
let currentResult = defaultResult;
let currentCalculationOutputDisplay = "";

function getUserNumberInput() {
  // If the input field is empty, `parseInt("")` returns `NaN`.
  return +userInput.value;
}

function add() {
  let enteredNumber = getUserNumberInput();
  if (isNaN(enteredNumber)) {
    return;
  }
  if (currentResult === 0) {
    currentCalculationOutputDisplay = enteredNumber.toString();
  } else {
    currentCalculationOutputDisplay = `${currentCalculationOutputDisplay} + ${enteredNumber}`;
  }
  currentResult += enteredNumber;
  outputResult(currentResult, currentCalculationOutputDisplay);
}

function subtract() {
  let enteredNumber = getUserNumberInput();
  if (isNaN(enteredNumber)) {
    return;
  }
  if (currentResult === 0) {
    currentCalculationOutputDisplay = enteredNumber.toString();
  } else {
    currentCalculationOutputDisplay = `${currentCalculationOutputDisplay} - ${enteredNumber}`;
  }
  currentResult -= enteredNumber;
  outputResult(currentResult, currentCalculationOutputDisplay);
}

function multiply() {
  let enteredNumber = getUserNumberInput();
  if (isNaN(enteredNumber)) {
    return;
  }
  if (currentResult === 0) {
    currentCalculationOutputDisplay = enteredNumber.toString();
  } else {
    currentCalculationOutputDisplay = `${currentCalculationOutputDisplay} * ${enteredNumber}`;
  }
  currentResult *= enteredNumber;
  outputResult(currentResult, currentCalculationOutputDisplay);
}

function divide() {
  let enteredNumber = getUserNumberInput();
  if (isNaN(enteredNumber)) {
    return;
  }
  if (currentResult === 0) {
    currentCalculationOutputDisplay = enteredNumber.toString();
  } else {
    currentCalculationOutputDisplay = `${currentCalculationOutputDisplay} / ${enteredNumber}`;
  }
  currentResult /= enteredNumber;
  outputResult(currentResult, currentCalculationOutputDisplay);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
