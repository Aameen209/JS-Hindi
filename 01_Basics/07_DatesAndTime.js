// Dates

let myDate = new Date()
// console.log(typeof myDate); //Date is a Object Type

// console.log(myDate.toString()); //Mon Apr 07 2025 02:15:04 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString()); //Mon Apr 07 2025
// console.log(myDate.toISOString()); //2025-04-06T20:45:04.303Z
// console.log(myDate.toJSON()); //2025-04-06T20:45:04.303Z
// console.log(myDate.toLocaleDateString()); //07/04/2025
// console.log(myDate.toLocaleString()); //07/04/2025, 02:16:36
// console.log(myDate.toUTCString()); //Sun, 06 Apr 2025 20:45:04 GMT

// let myCreatedDate = new Date(2026,1, 12) //month started from 0 
// console.log(myCreatedDate.toDateString());
// let myCreatedDateTime = new Date(2026,1, 12,7,8,9) 
// console.log(myCreatedDateTime.toLocaleString());

let myDateDDMMYY = new Date("2025-12-14"); 
console.log(myDateDDMMYY.toLocaleString()); // Formats the date based on the locale.
console.log(Math.floor(Date.now()/1000)); // Converts current time to seconds (Unix timestamp).

let myTimeStamp = Date.now();
console.log(myTimeStamp); // Prints the current timestamp in milliseconds since January 1, 1970.

let newDate = new Date();
console.log(newDate.getDate()); // Returns the day of the month (1 to 31).
console.log(newDate.getMonth() + 1); // Returns the month (0-11), so adding 1 to match the standard month format.

`${newDate.getDate()}` // Get the current day as a string (useful for display).
console.log(newDate.toLocaleString('default', {
    weekday: "long", // Full weekday name (e.g., "Monday").
    timeZone: "IST" // Sets the timezone to Indian Standard Time (IST).
})); // Prints the date and weekday in long format according to IST.


