/*
    Date And Time

    new Date(timestamp)
    new Date(Date String)
    new Date(Numeric Values)

    Format
    - "Oct 25 1982"
    - "10/25/1982"
    - "1982-10-25" => ISO International Standard
    - "1982 10"
    - "1982"
    - "82"
    - 1982, 9, 25, 2, 10, 0
    - 1982, 9, 25
    - "1982-10-25T06:10:00Z"

    Date.parse("String") // Read Date From A String
*/

// Thu Jan 01 1970 02:00:00 GMT+0200
let date1 = new Date(0);
console.log(date1);

// Mon Oct 25 1982 00:00:00 GMT+0200
let date2 = new Date("Oct 25 1982");
console.log(date2);

// Mon Oct 25 1982 00:00:00 GMT+0200
let date3 = new Date("10/25/1982");
console.log(date3);

// Wed Dec 01 1982 00:00:00 GMT+0200
let date4 = new Date("1982 12");
console.log(date4);

// Fri Jan 01 1982 00:00:00 GMT+0200
let date5 = new Date("82");
console.log(date5);

// 1060117200000
console.log(Date.parse("Aug 6 2003")); 

// Aug 6 2003
let date6 = new Date(1060117200000);
console.log(date6);