import{test,expect} from "@playwright/test"
import { log } from "console";
// Rest API https://restful-booker.herokuapp.com/apidoc/index.html
test("Post call with token from Endpoint https://restful-booker.herokuapp.com/auth",async({request})=>
{
	const authdata={
					"username": "admin",
					"password": "password123"}
	const response= await request.post("https://restful-booker.herokuapp.com/auth",{headers:{"Content-Type":"application/json"},data:authdata})
	console.log(response.status());
	console.log(await response.json());
	const responseData =await response.json();
    console.log("Token is:",responseData.token);
	expect(responseData.token).not.toBeNull()
})
test("Post call with BookingID from Endpoint restful-booker.herokuapp.com/booking",async({request})=>
{
	const bookingdata={
    "firstname" : "Jim",
    "lastname" : "Brown",
    "totalprice" : 111,
    "depositpaid" : true,
    "bookingdates" : {
        "checkin" : "2018-01-01",
        "checkout" : "2019-01-01"
    },
    "additionalneeds" : "Breakfast"
}
	const response= await request.post("https://restful-booker.herokuapp.com/booking ",{headers:{"Content-Type":"application/json"},data:bookingdata})
	console.log(response.status());
	//expect(response.status).toBe(200)
	console.log(await response.json());
	const responseData =await response.json();
    
	expect(responseData.bookingid).not.toBeNull()
	expect(responseData.booking.firstname).toBe(bookingdata.firstname)
    console.log("Firstname is:",responseData.booking.firstname);
	expect(responseData.booking.lastname).toBe(bookingdata.lastname)
	expect(responseData.booking.totalprice).toBe(bookingdata.totalprice)
	expect(responseData.booking.depositpaid).toBe(bookingdata.depositpaid)
	expect(responseData.booking.bookingdates.checkin).toBe(bookingdata.bookingdates.checkin)
	expect(responseData.booking.bookingdates.checkout).toBe(bookingdata.bookingdates.checkout)
	
	expect(responseData.booking.additionalneeds).toBe(bookingdata.additionalneeds)
    })