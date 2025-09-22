
const xlsx = require('xlsx');
const path = require('path');

function getTestData(sheetName) {
  const filePath = path.resolve(__dirname, '../testData/testData.xlsx'); // adjust path
  const workbook = xlsx.readFile(filePath);
  const worksheet = workbook.Sheets[sheetName];
  return xlsx.utils.sheet_to_json(worksheet); // returns array of objects
}
console.log(getTestData('Login')); // For debugging purposes

module.exports = { getTestData };
