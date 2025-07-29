// Program: In an array of Number, find the largest number
const numbers = [45, 12, 78, 34, 89, 23];
// Method 1: Using Math.max with spread operator
const maxNumber = Math.max(...numbers);

console.log("The largest number is:", maxNumber);
// Using loop

const num = [233, 45, 78, 34, 100, 23];
let max = num[0];

for (let i = 1; i < num.length; i++) {
  if (num[i] > max) {
    max = num[i];
  }
}

console.log("The largest number is:", max);

