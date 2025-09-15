//By using push pop slice shift and unshift methods perform the following tasks.
const fruits = ['apple', 'banana', 'orange'];
//1. Add 'grape' to the end of the array.
fruits.push('grape');
console.log(fruits); // Output: ['apple', 'banana', 'orange', 'grape'] 
//2. Remove the last element from the array.
fruits.pop();
console.log(fruits); // Output: ['apple', 'banana', 'orange'] 
//3. Add 'kiwi' to the beginning of the array.
fruits.unshift('kiwi');
console.log(fruits); // Output: ['kiwi', 'apple', 'banana', 'orange']
//4. Remove the first element from the array.
fruits.shift(); 
console.log(fruits); // Output: ['apple', 'banana', 'orange']
//5. Create a new array that contains only the second and third elements of the original array.
const newFruits = fruits.slice(1, 3);
console.log(newFruits); // Output: ['banana', 'orange']
//6. Print the final state of the original array and the new array.
console.log('Original array:', fruits); // Output: ['apple', 'banana', 'orange']
console.log('New array:', newFruits); // Output: ['banana', 'orange']           
//7. Verify the length of both arrays.
console.log('Length of original array:', fruits.length); // Output: 3
console.log('Length of new array:', newFruits.length); // Output: 2 
//8. Check if 'banana' is present in the original array.
const hasBanana = fruits.includes('banana');
console.log('Is banana present in the original array?', hasBanana); // Output: true
//9. Find the index of 'orange' in the original array.
const indexOfOrange = fruits.indexOf('orange');
console.log('Index of orange in the original array:', indexOfOrange); // Output: 2
//10. Reverse the order of elements in the original array.
fruits.reverse();
console.log('Reversed original array:', fruits); // Output: ['orange', 'banana', 'apple']   
//11. Sort the original array in alphabetical order.
fruits.sort();
console.log('Sorted original array:', fruits); // Output: ['apple', 'banana', 'orange'] 
//12. Join all elements of the original array into a single string, separated by commas.
const fruitsString = fruits.join(', ');
console.log('Fruits as a string:', fruitsString); // Output: 'apple, banana, orange'
//13. Create a copy of the original array.
const fruitsCopy = fruits.slice();
console.log('Copy of the original array:', fruitsCopy);
// Output: ['apple', 'banana', 'orange']
 fruits.forEach((fruit,index) =>
     {
    console.log(`${index}: ${fruit}`);
 })
//14. Clear all elements from the original array.
fruits.length = 0;
console.log('Cleared original array:', fruits); // Output: []       
//15. Verify that the original array is empty and the copy still contains the elements.
console.log('Is the original array empty?', fruits.length === 0); // Output: true
console.log('Copy of the original array still contains elements:', fruitsCopy); // Output: ['apple', 'banana', 'orange']            

