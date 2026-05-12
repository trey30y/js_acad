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

const subtractUp = (resultHandler, ...numbers) => {
  const validateNumber = (number) => (isNaN(number) ? 0 : number);
  let sum = 0;
  for (const num of numbers) {
    sum -= validateNumber(num);
  }
  resultHandler(sum);
};

const combine = (resultHandler, operation, ...numbers) => {
  // validateNumber is only available in sumUp
  const validateNumber = (number) => (isNaN(number) ? 0 : number);
  let sum = 0;
  for (const num of numbers) {
    if (operation === "ADD") {
      sum += validateNumber(num);
    } else {
      sum -= validateNumber(num);
    }
  }
  resultHandler(sum);
};

const showResult = (messageText, result) => {
  console.log(`${messageText}: ${result}`);
};

// bind() will create a new reference at a function which is not immediately executed, which will be preconfigured regarding the arguments it receives
combine(
  showResult.bind(this, "The result after adding all numbers is: "),
  "ADD",
  100,
  4,
  -7,
  77,
  "P",
  -6,
  8,
);
combine(
  showResult.bind(this, "The result after adding all numbers is: "),
  "ADD",
  0,
  4,
  -7,
  77,
  "P",
  -6,
  8,
);
combine(
  showResult.bind(this, "The result after subtracting all numbers is: "),
  "SUBTRACT",
  0,
  4,
  -7,
  77,
  "P",
  -6,
  8,
);
