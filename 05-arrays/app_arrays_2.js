const testResults = [1, 3.3, 1.5, 10.99, 1.5, 10];
const storedResults = testResults.slice();
testResults.push(5.91);
const concatResults = testResults.concat([10, 20, 30]);

const first3Results = testResults.slice(0, 3);

console.log(
  `test:\t${testResults}\nstored:\t${storedResults}\nfirst3:\t${first3Results}\nconcat:\t${concatResults}`,
);
// The indexOf() method searches an array for a specific element and returns the first index at which it is found. If the element is not present, it returns -1.
console.log(`indexOf: ${testResults.indexOf(1.5)}`);
console.log(`indexOf: ${testResults.indexOf(1.54)}`);

const personData = [
  { id: 0, name: "max" },
  { id: 4, name: "manuel" },
  { id: 1, name: "alice" },
  { id: 2, name: "trey" },
  { id: 3, name: "bob" },
];
// const found = array.find((element, index, array) => {
// Return true if this is the element you want
// });
// .find() returns the first element that evaluates to true in your callback function.
const manuel = personData.find((person, index, persons) => person.id === 1);
console.log("manuel:", manuel);

// findIndex() is a higher-order array method used to locate the position of the first element that satisfies a specific condition. While .find() gives you the actual value, findIndex() gives you the index number.
const manuelIdx = personData.findIndex(
  (person, index, persons) => person.name.toLowerCase() === "manuel",
);
console.log(`manuelIdx: ${manuelIdx}`);

console.log(`.includes(): ${testResults.includes(10.99)}`); // true
