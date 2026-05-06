let currentResult = 0;

function getUserNumberInput() {
  // the input is already a number, no need to convert it using parseFloat or Number
  // the plus sign at the beginning of userInput.value converts it to a number
  const enteredNumber = +userInput.value;
  return enteredNumber;
}

function add() {
  const calculationDescription = `${currentResult} + ${getUserNumberInput()}`;
  currentResult = currentResult + getUserNumberInput();
  outputResult(currentResult, calculationDescription);
}

function subtract() {
  const calculationDescription = `${currentResult} - ${getUserNumberInput()}`;
  currentResult = currentResult - getUserNumberInput();
  outputResult(currentResult, calculationDescription);
}

function multiply() {
  const calculationDescription = `${currentResult} * ${getUserNumberInput()}`;
  currentResult = currentResult * getUserNumberInput();
  outputResult(currentResult, calculationDescription);
}

function divide() {
  const calculationDescription = `${currentResult} / ${getUserNumberInput()}`;
  currentResult = currentResult / getUserNumberInput();
  outputResult(currentResult, calculationDescription);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
