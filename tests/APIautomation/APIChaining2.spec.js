import { test, expect } from '@playwright/test';
import { generateRandomString } from '../Utility/reusableMethod';
import { generateBookingDates } from '../Utility/reusableMethod';
import 'dotenv/config';
import  Ajv from 'ajv';
//import { console, url } from 'inspector';

test('API Chaining: Auth, Create Booking, Get Booking, Update Booking', async ({ page }) => {
   const baseURL = process.env.BASE_URL // 'https://restful-booker.herokuapp.com';
    // Step 1: Generate API Auth token
    const authResponse = await page.request.post(`${baseURL}/auth`, {
        data: {
            username: process.env.Applicationusername,
            password: process.env.Applicationpassword,
        },

        
    });
    console.log('username:',process.env.Applicationusername);
    console.log('password:',process.env.Applicationpassword);
    
    expect(authResponse.status()).toBe(200);
    const authToken = (await authResponse.json()).token;
    console.log('Auth Token:', authToken);

    // Step 2: Create a new booking
    let firstName = generateRandomString(8);
    //let checkinDate = generateRandomDate();
    const bookingResponse = await page.request.post(`${baseURL}/booking`, {
        data: {
            firstname: 'Sailaja',
            lastname: 'Doe',
            totalprice: 150,
            depositpaid: true,
            bookingdates: {
                checkin: '2023-10-01'           ,
                checkout: '2023-10-10'
            },
            additionalneeds: 'Breakfast'
        },
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json',
        }
    });
    expect(bookingResponse.status()).toBe(200);
    const responseData = await bookingResponse.json();
    const bookingId = responseData.bookingid;
    console.log('Created Booking:', responseData);

    expect(responseData).toHaveProperty('bookingid');
    expect(responseData.booking).toHaveProperty('firstname', 'Sailaja');

    // Step 3: Get the created booking by ID
    console.log("TAKE GET RESPONSE");
    const getResponse = await page.request.get(`${baseURL}/booking/${bookingId}`);
    expect(getResponse.status()).toBe(200);
    //const bookingDetails = await getResponse.json();
    //console.log('Booking Details:', bookingDetails);
    const body = await getResponse.body();
    console.log("Response Body:",  +body);// Get or extract updated respose
    console.log("Response Body:", body.toString());
    console.log("Response Body:", await getResponse.json()); 
    // Step 4: Update the booking

    const updatedFirstName = generateRandomString(6);
    const { checkin, checkout } = generateBookingDates();

    const updateResponse = await page.request.put(`${baseURL}/booking/${bookingId}`, {headers: {"Content-Type": "application/json",
    "Accept": "application/json",
    "Cookie": `token=${authToken}`},
        data: {
            "firstname": updatedFirstName,
            "lastname": "Doe",
            "totalprice": 3000,
            "depositpaid": false,
            "bookingdates": {
                "checkin": checkin,
                "checkout": checkout
            },
            "additionalneeds": "Lunch"
        }
    });
    expect(updateResponse.status()).toBe(200);
    
    const updatedBooking = await updateResponse.json();// Get or extract updated respose 
    console.log('Updated Booking:', updatedBooking);
    expect(updatedBooking.totalprice).toBe(3000);
expect(updatedBooking.depositpaid).toBe(false);
expect(updatedBooking.additionalneeds).toBe('Lunch'); 
console.log("Schema validation for get response");
//Step 1: Send and get the response from the API endpoint
const response = await page.request.get(`${baseURL}/booking/${bookingId}`);
const responseBody = await response.json();
console.log("Response Body:", responseBody);
    console.log("Script executed successfully");
// Step 2: Define the expected schema for the response
const Schema = {
  "type": "object",
  "properties": {
    "firstname": {
      "type":  "string"
    },
    "lastname": {
      "type": "string"
    },
    "totalprice": {
      "type": "number"
    },
    "depositpaid": {
      "type": "boolean"
    },
    "bookingdates": {
      "type": "object",
      "properties": {
        "checkin": {
          "type": "string"
        },
        "checkout": {
          "type": "string"
        }
      },
      "required": [
        "checkin",
        "checkout"
      ]
    },
    "additionalneeds": {
      "type": "string"
    }
  },
  "required": [
    "firstname",
    "lastname",
    "totalprice",
    "depositpaid",
    "bookingdates",
    "additionalneeds"
  ]
}
// Step 3: check the response against the expected schema
/*Ajv is class so we need to create an object,
ajv.complie is a method which takes schema as input and returns a function that can be used to validate data against the schema.  

 */
const ajv = new Ajv();
const validate = ajv.compile(Schema); // validate is a ananonymous function which takes data as input and returns true if the data is valid according to the schema, or false otherwise.
const isValid = validate(responseBody);
expect(isValid).toBeTruthy()  ;
});



/*npm install --save-dev dotenv-cli
npx dotenv -e .env.prod -- npx playwright test tests/APIautomation/APIChaining2.spec.js --headed
npx dotenv -e .env.prod -- npx playwright test tests/APIautomation/APIChaining2.spec.js --reporter=html
npx dotenv -e .env.prod -- npx playwright show-report
similar to qa
npx dotenv -e .env.qa -- npx playwright test tests/APIautomation/APIChaining2.spec.js --headed --project=chromium
npx dotenv -e .env.dev -- npx playwright test tests/APIautomation/APIChaining2.spec.js --headed --project=chromium


*/ 