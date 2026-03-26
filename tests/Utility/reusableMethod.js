function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
console.log(generateRandomString(8));
console.log("---------------------------------------------------");


function getRandomDateInCurrentMonth() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth(); // 0–11

  // Find how many days are in the current month
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Pick a random day (1 → daysInMonth)
  const day = Math.floor(Math.random() * daysInMonth) + 1;

  return new Date(year, month, day);
}

function formatDate(date) {
  return date.toISOString().split('T')[0];
}
function generateBookingDates() {
  const checkin = getRandomDateInCurrentMonth();
  const checkout = new Date(checkin);
  checkout.setDate(checkout.getDate() + 10);

  return {
    checkin: formatDate(checkin),
    checkout: formatDate(checkout)
  };
}
/*const { checkin, checkout } = generateBookingDates();

console.log("Check-in:", checkin);
console.log("Check-out:", checkout);*/
module.exports = { generateRandomString, generateBookingDates };