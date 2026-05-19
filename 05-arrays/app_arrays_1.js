const numbers = [1, 2, 3];
const tripled = Array.from(numbers, (num) => num * 3);
// console.log(tripled); [3, 6, 9]

const favHobbies = ["sports", "cooking"];
// push() adds item at the end of the array
favHobbies.push("reading");
// unshift() adds item at the beginning
favHobbies.unshift("coding");
// pop() remove the last element, returns the element returned
const poppedValue = favHobbies.pop();
// shift() remove the item at the beginning
favHobbies.shift();
console.log(favHobbies);

// splice() - mutates the array in place
// Remove 2 items starting at index 1 (Banana)
const fruits = ["Apple", "Banana", "Cherry", "Date"];
const removed = fruits.splice(1, 2);
console.log(fruits); // Output: ['Apple', 'Date']
console.log(removed); // Output: ['Banana', 'Cherry'] (The method returns the deleted items)

// At index 2, delete 0 items and add 'Yellow'
const colors = ["Red", "Green", "Blue"];
colors.splice(2, 0, "Yellow");
console.log(colors); // Output: ['Red', 'Green', 'Yellow', 'Blue']

// Replace 'Lunch' (index 1) with 'Nap'
const schedule = ["Meeting", "Lunch", "Gym"];
schedule.splice(1, 1, "Nap");
console.log(schedule); // Output: ['Meeting', 'Nap', 'Gym']

const numbersTest = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let lastToKeep = 3;
const removedElements = numbersTest.splice(0, numbersTest.length - lastToKeep);
console.log(numbersTest);
console.log(`removed elements with splice(): ${removedElements}`);
console.log("________________________");
