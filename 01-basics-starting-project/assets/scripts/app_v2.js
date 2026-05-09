const defaultResult = 0;
let currentResult = defaultResult;
let currentCalculationOutputDisplay = currentCalculationOutput.textContent;

function getUserNumberInput() {
  return +userInput.value;
}

function calculate(operation) {
  const enteredNumber = getUserNumberInput();
  if (isNaN(enteredNumber)) {
    return;
  }

  let operator;
  const initialResult = currentResult;

  switch (operation) {
    case "ADD":
      operator = "+";
      currentResult += currentResult;
      break;
    case "SUBTRACT":
      operator = "-";
      currentResult -= enteredNumber;
      break;
    case "MULTIPLY":
      operator = "*";
      currentResult *= enteredNumber;
      break;
    case "DIVIDE":
      operator = "/";
      currentResult /= enteredNumber;
      break;
    default:
      return;
  }

  if (initialResult === 0) {
    currentCalculationOutputDisplay = enteredNumber.toString();
  } else {
    currentCalculationOutputDisplay = `${currentCalculationOutputDisplay} ${operator} ${enteredNumber}`;
  }

  outputResult(currentResult, currentCalculationOutputDisplay);
}

// * bind(): Creates a new function wrapper around the original calculate function.
// * this: Sets the execution context (or this keyword) for the function. In this global scope, this is usually the window object.
// * "ADD": The crucial part. Because of how bind works, any additional arguments passed after the context (this) are permanently set as the first arguments for that function.

// if I do this: addBtn.addEventListener("click", calculate("ADD"));
// JavaScript executes calculate("ADD") immediately as soon as the script loads. It then takes whatever that function returns and hands it to addEventListener.

addBtn.addEventListener("click", calculate.bind(this, "ADD"));
subtractBtn.addEventListener("click", calculate.bind(this, "SUBTRACT"));
multiplyBtn.addEventListener("click", calculate.bind(this, "MULTIPLY"));
divideBtn.addEventListener("click", calculate.bind(this, "DIVIDE"));
