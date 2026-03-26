import{test,expect}from "@playwright/test"
import { generateRandomString, generateBookingDates } from '../Utility/reusableMethod';
// Rest API https://restful-booker.herokuapp.com/apidoc/index.html
test("Update Booking with PUT call to Endpoint https://restful-booker.herokuapp.com/booking/{id}",async({request})=>
{
    const updatedFirstName = generateRandomString(6);
    const { checkin, checkout } = generateBookingDates()
    //Change booking id as per your created booking id and token value
    const updateResponse = await request.put(
"https://restful-booker.herokuapp.com/booking/2790", {headers: {"Content-Type": "application/json",
    "Accept": "application/json",
    "Cookie": "token= fd583efd3fba73a"},
        data: {
            firstname: updatedFirstName,
            lastname: 'Doe',
            totalprice: 800,
            depositpaid: false,
            bookingdates: {
                checkin: checkin,
                checkout: checkout
            },
            additionalneeds: 'Lunch'
        }
    });
    expect(updateResponse.status()).toBe(200);
    const updatedBooking = await updateResponse.json();
    console.log('Updated Booking:', updatedBooking);    

    console.log("Script executed successfully");
});

//Playwright can also abort slow requests using route.abort():

//await page.route('**/api/data.json', (route) => {
 // route.abort(); // aborts the request immediately
//});


/*Or by setting a timeout:

await page.setDefaultNavigationTimeout(5000); // abort navigation if too slow*/