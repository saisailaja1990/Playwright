//Program to string reverse 

/*split('') turns the string into an array of characters
reverse() reverses the array
join('') joins the array back into a string */

console.log('1.Program to string reverse')
const str = 'London';
const reversed = str.split('').reverse().join('');
console.log(reversed); // Output: 'nodnoL'

// For a Sentence - "I am new to javascript" -> Reverse the individual word output -> 
// "I ma wen ot tpircsavaj"
console.log('2.Program reverse individual word of the sentence')
const str1='I am new to javascript';
const reversedStr1 = str1.split('').reverse().join('');
console.log(reversedStr1);

//Check the given word is Palindrome or not -> 'Mom'

console.log('3.Program to check the given word is palindrome or not')
const word= 'WOW';
const normalized = word.toLowerCase(); // Make it case-insensitive
const reversed2 = normalized.split('').reverse().join('');

if (normalized === reversed2) {
  console.log('Palindrome');
} else {
  console.log('Not a palindrome');
}
