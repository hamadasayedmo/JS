
let ip = "2001:db8:3333:4444:5555:6666:7777:8888";

// let ipRe = /\d{4}:\w+:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}/g;

let ipRe = /(\w+|\D+)+/g;  // (\D) => return all but not numbers

console.log(ip.match(ipRe)); // [ '2001:db8:3333:4444:5555:6666:7777:8888' ]






let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";

let specialNamesRe = /Os\d*O/g;

console.log(specialNames.match(specialNamesRe)); // [ 'Os10O', 'OsO', 'Os100O' ]






let phone = "+(995)-123 (4567)";

let validPhone = /\+\(\d{3}\)\-\d{3}\s\(\d{4}\)/g;

console.log(phone.match(validPhone)); // [ '+(995)-123 (4567)' ]






let date1 = "25/10/1982";
let date2 = "25 - 10 - 1982";
let date3 = "25 10 1982";
let date4 = "25 10 82";

let re = /\d{2}\/*\s*-*\s*\d{2}\/*\s*-*\s*\d*/g; // Write Pattern Here

console.log(date1.match(re)); // "25/10/1982"
console.log(date2.match(re)); // "25 - 10 - 1982"
console.log(date3.match(re)); // "25 10 1982"
console.log(date4.match(re)); // "25 10 82"





let url1 = 'elzero.org';
let url2 = 'http://elzero.org';
let url3 = 'https://elzero.org';
let url4 = 'https://www.elzero.org';
let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';

let Re = /(https?:)?(\/\/)?(\w+)(.\w+)?(.\w+)(:\d{4})?(\/\w+.\w+\?\w+=\d{3}\&\w+=\w+)?/g; // Write Your Pattern Here

console.log(url1.match(Re));
console.log(url2.match(Re));
console.log(url3.match(Re));
console.log(url4.match(Re));
console.log(url5.match(Re));