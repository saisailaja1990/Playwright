const n = 8; // Number of terms
let a = 0, b = 1;

console.log(a); // First term
console.log(b); // Second term

for (let i = 2; i < n; i++) {
  const next = a + b;
  console.log(next);//series.push(next); Used to print  the output in  horizontal 
  a = b;
  b = next;
}
//console.log(series.join(' '));

/*n = 8 means we want 8 terms.

It starts with 0 and 1, then each next number is the sum of the previous two.*/
