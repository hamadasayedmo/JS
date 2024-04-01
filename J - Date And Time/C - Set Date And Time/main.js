/*
    Date And Time
    - setTime(Milliseconds)
    - setDate() => Day Of The Month [Negative And Positive]
    - setFullYear(year, month => Optional [0-11], day => Optional [1-31])
    - setMonth(Month [0-11], Day => Optional [1-31]) [Negative And Positive]
    - setHours(Hours [0-23], Minutes => Optional [0-59], Seconds => Optional [0-59], MS => Optional [0-999])
    - setMinutes(Minutes [0-59], Seconds => Optional [0-59], MS => Optional [0-999])
    - setSeconds(Seconds => [0-59], MS => Optional [0-999])
*/


let dateNow = new Date(); 
console.log(dateNow); // Thu Mar 07 2024 15:05:45 GMT+0200 

dateNow.setTime(0); 
console.log(dateNow); // Thu Jan 01 1970 02:00:00 GMT+0200 

dateNow.setDate(2); 
console.log(dateNow); // Fri Jan 02 1970 02:00:00 GMT+0200 

dateNow.setFullYear(2003); 
console.log(dateNow); // Thu Jan 02 2003 02:00:00 GMT+0200 

dateNow.setMonth(0); 
console.log(dateNow); // Jan يناير 
