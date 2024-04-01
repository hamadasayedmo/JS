/*
    Date And Time
    - getTime() => Number Of Milliseconds
    - getDate() => Day Of The Month
    - getFullYear()
    - getMonth() => Zero Based
    - getDay() => Day Of The Week
    - getHours()
    - getMinutes()
    - getSeconds()
*/



let startTime = 1970;

let dateNow = new Date();

let birthDay = new Date('Aug 6, 2003');

let dateDif = dateNow - birthDay;
console.log(dateDif / 1000 / 60 / 60 / 24 / 365); // 20.5



// Day Of The Week
let weak = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

console.log(dateNow.getDay());        // index: 3
console.log(weak[dateNow.getDay()]);  // Wed => رقم اليوم في الاسبوع بيبدا يوم الاحد من رقم صفر


// getMonth
let month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

console.log(dateNow.getMonth());        // index: 2
console.log(month[dateNow.getMonth()]); // Mar


console.log(dateNow.getTime());         // الوقت من البدايه بالمللي ثانيه

console.log(dateNow.getFullYear());     // 2024 =>  بستخدمها وانا بعمل كوبي رايت 

console.log(dateNow.getDate());         // تاريخ انهرضا

console.log(dateNow.getHours());        // الساعه كام

console.log(dateNow.getMinutes());      // الساعه كام بالدقائق

console.log(dateNow.getSeconds());      // الساعه كام بالثونى