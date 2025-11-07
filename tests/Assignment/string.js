str1='Hello, World!';
function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log(reverseString(str1));

function reverseString(str1) {
  let reversed = '';
  for (let char of str1) {
    reversed = char + reversed;
  }
  return reversed;
}
console.log(reverseString(str1));

let sentence = "I am learning JavaScript";

function reverseWords(sentence) {
  const words = sentence.split(' ');
  let reversed = '';
  for (let i = words.length - 1; i >= 0; i--) {
    reversed += words[i] + (i > 0 ? ' ' : '');
  }
  return reversed;
}
console.log(reverseWords(sentence));
