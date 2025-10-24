import { test, expect } from '@playwright/test';
import { generateRandomString, generateRandomDate } from '../Utility/reusableMethod';
import 'dotenv/config';
import { console, url } from 'inspector';

test('API Chaining: Auth, Create Booking, Get Booking', async ({ page }) => {
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
    let checkinDate = generateRandomDate();
    const bookingResponse = await page.request.post(`${baseURL}/booking`, {
        data: {
            firstname: firstName,
            lastname: 'Doe',
            totalprice: 150,
            depositpaid: true,
            bookingdates: {
                checkin: checkinDate,
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
    expect(responseData.booking).toHaveProperty('firstname', firstName);

    // Step 3: Get the created booking by ID
    const getResponse = await page.request.get(`${baseURL}/booking/${bookingId}`);
    expect(getResponse.status()).toBe(200);
    const bookingDetails = await getResponse.json();
    console.log('Booking Details:', bookingDetails);
    console.log("Script executed successfully");
});
/*npm install --save-dev dotenv-cli
npx dotenv -e .env.prod -- npx playwright test tests/APIautomation/APIChaining2.spec.js --headed
npx dotenv -e .env.prod -- npx playwright test tests/APIautomation/APIChaining2.spec.js --reporter=html
npx dotenv -e .env.prod -- npx playwright show-report
similar to qa
npx dotenv -e .env.qa -- npx playwright test tests/APIautomation/APIChaining2.spec.js --headed --project=chromium
npx dotenv -e .env.dev -- npx playwright test tests/APIautomation/APIChaining2.spec.js --headed --project=chromium


*/ 