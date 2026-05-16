const prices = [10.99, 5.99, 3.99, 6.59, 7.49, 13.49];
const tax = 0.19;

// prices.forEach((price, index) => {
//   const taxAdjustedPrice = price * (1 + tax);
//   const priceObj = { index: index, price: taxAdjustedPrice };
//   taxAdjustedPrices.push(priceObj);
// });

// forEach() doesn't return anything
// const displayObjPrice = function (prices) {
//   prices.forEach((price) => {
//     for (const key in price) {
//       if (key === "index") {
//         process.stdout.write(`idx ${price[key]}: `);
//       } else {
//         console.log(Number(price[key].toFixed(2)));
//       }
//     }
//   });
// };
// displayObjPrice(taxAdjustedPrices);

// map return

// map() returns a value, so we must capture it in a new variable
const taxAdjustedPrice = prices.map((price) => price * (1 + tax));
taxAdjustedPrice.forEach((price, index) =>
  console.log(
    `price w/out tax: ${prices[index]} <==> price w/ tax: ${Number(price.toFixed(2))}`,
  ),
);

// For the provided input [1, 2, 3] the transformToObjects() function should return [{val: 1}, {val: 2}, {val: 3}].

const transformToObjects = prices.map((price, index) => ({
  val: price,
  id: index,
}));

transformToObjects.forEach((priceObject) => console.log(priceObject));

// Both .sort() and .reverse() modify the original array in place.
// sorting, reverse() reverses the arrays
// positive num swap, negative num leaves, zero does nothing
const sortedArray = prices.sort((a, b) => {
  if (a > b) {
    return 1;
  } else if (a == b) {
    return 0;
  } else {
    return -1;
  }
});
sortedArray.forEach((price) => process.stdout.write(`${price}; `));
console.log();

// filter()
// prices greater than 6
const filteredPrices = prices.filter((price) => price > 6);
console.log(`pricers>6: ${filteredPrices}`);

// reduce()
// array.reduce((accumulator, currentValue, currentIndex, array) => {
//   return nextAccumulatorValue;
// }, initialValue);

// CRITICAL: You must return the accumulator object back to the engine loop
let sum = prices.reduce((accum, curr) => accum + curr, 0);
console.log(`the sum of prices is: ${Number(sum.toFixed(2))}`);

const data = "new york;10.99;2000";
const transformData = data.split(";");
console.log(transformData);

const namedFragments = ["Max", "Little"];
const name = namedFragments.join(" ");
console.log(name);

const copiedNamedFragments = [...namedFragments];
namedFragments.unshift("Mr.");
console.log(namedFragments, "<=>", copiedNamedFragments);

console.log(`the min in prices: ${Math.min(...prices)}`);

const persons = [
  { name: "Max", age: 30 },
  { name: "Manuel", age: 31 },
];
// while we have a new array, the objects in the array are the old objects
const copiedPersons = [...persons];
const copiedPersonsNew = [...persons.map((person) => ({ ...person }))];

persons.push({ name: "Ana", age: 39 });
persons[0].age = 99;
console.log(persons, "<=>", copiedPersons);
console.log(persons, "<=>", copiedPersonsNew); // true copy

// array destructuring
const nameData = ["Max", "Little"];
const [firstName, lastName] = nameData;
console.log(`${firstName} ${lastName}`);
