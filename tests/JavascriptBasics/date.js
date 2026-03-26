const { timeStamp } = require("node:console");

/*Date objects are created with the new Date() constructor.
There are 9 ways to create a new date object:
new Date()
new Date(date string)

new Date(year,month)
new Date(year,month,day)
new Date(year,month,day,hours)
new Date(year,month,day,hours,minutes)
new Date(year,month,day,hours,minutes,seconds)
new Date(year,month,day,hours,minutes,seconds,ms)

new Date(milliseconds)
*/
const d = new Date();
console.log("Current Date and Time: " + d.toString());
const d1 = new Date("2022-03-25");
console.log("Specific Date: " + d1.toString());
const d2 = new Date(2022, 2); // March 1, 2022 (months are 0-indexed)
console.log("Year and Month: " + d2.toString());
const d3 = new Date(2022, 2, 25);
console.log("Year, Month, and Day: " + d3.toString());      
const d4 = new Date(2022, 2, 25, 10);
console.log("Year, Month, Day, and Hours: " + d4.toString());
const d5 = new Date(2022, 2, 25, 10, 30);
console.log("Year, Month, Day, Hours, and Minutes: " + d5.toString());      
const d6 = new Date(2022, 2, 25, 10, 30, 45);
console.log("Year, Month, Day, Hours, Minutes, and Seconds: " + d6.toString());      
const d7 = new Date(2022, 2, 25, 10, 30, 45, 500);
console.log("Year, Month, Day, Hours, Minutes, Seconds, and Milliseconds: " + d7.toString());      
const d8 = new Date(1679788800000); // Specific milliseconds
console.log("Date from Milliseconds: " + d8.toString());    
// Output various components of the current date
console.log("Year: " + d.getFullYear());
console.log("Month: " + (d.getMonth() + 1)); // Months are 0-indexed
console.log("Date: " + d.getDate());
console.log("Hours: " + d.getHours());      
console.log("Minutes: " + d.getMinutes());
console.log("Seconds: " + d.getSeconds());
console.log("Milliseconds: " + d.getMilliseconds());    
console.log("Day of the Week: " + d.getDay()); // 0 (Sunday) to 6 (Saturday)

// Output date in different formats         
console.log("ISO String: " + d.toISOString());
console.log("UTC String: " + d.toUTCString());
console.log("Locale String: " + d.toLocaleString());
console.log("Locale Date String: " + d.toLocaleDateString());
console.log("Locale Time String: " + d.toLocaleTimeString());       
console.log("Time in Milliseconds since January 1, 1970: " + d.getTime());
// Set different components of the date
d.setFullYear(2023);
d.setMonth(11); // December
d.setDate(31);
d.setHours(23);     
d.setMinutes(59);
d.setSeconds(59);
d.setMilliseconds(999); 
console.log("Updated Date and Time: " + d.toString());
timeStamp("End of Date Tests");
console.log("---------------------------------------------------");
let text = "";
const today = new Date();
const someday = new Date();
someday.setFullYear(2100, 0, 14);

if (someday > today) {
  text = "Today is before January 14, 2100.";
} else {
  text = "Today is after January 14, 2100.";
}
console.log(text);