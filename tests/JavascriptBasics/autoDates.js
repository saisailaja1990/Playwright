/*function getRandomDate(start, end) {
  // returns a random Date between start and end
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function formatDate(date) {
  // formats a JS Date as YYYY-MM-DD
  return date.toISOString().split('T')[0];
}

// Example: generate random checkin and checkout dates
const checkin = getRandomDate(new Date(2025, 0, 1), new Date(2025, 11, 31));
const checkout = new Date(checkin);
checkout.setDate(checkout.getDate() + Math.floor(Math.random() * 10) + 1); // 1–10 days after checkin
console.log("Check-in Date: " + formatDate(checkin));
console.log("Check-out Date: " + formatDate(checkout));

function getRandomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function formatDate(date) {
  return date.toISOString().split('T')[0];
}

const checkin1 = getRandomDate(new Date(2025, 0, 1), new Date(2025, 11, 31));

const checkout1 = new Date(checkin1);
checkout1.setDate(checkout1.getDate() + 10);  // ← fixed 10-day stay

const data = {
  firstname: 'John',
  lastname: 'Doe',
  totalprice: 200,
  depositpaid: false,
  bookingdates: {
    checkin: formatDate(checkin),
    checkout: formatDate(checkout1)
  },
  additionalneeds: 'Lunch'
};

console.log("Check-in:", formatDate(checkin1));
console.log("Check-out:", formatDate(checkout1));*/
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
const { checkin, checkout } = generateBookingDates();

console.log("Check-in:", checkin);
console.log("Check-out:", checkout);