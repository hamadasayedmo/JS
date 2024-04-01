/*
    Date And Time
    - Date Constructor

    Static Methods
    - Date.now()

    - To Track Time You Need Starting Point
    - Epoch Time Or Unix Time In Computer Science Is The Number of Seconds Since January 1, 1970.
    - Why 1970 [829 Days To 136 Years]

    Search For
    - Year 2038 Problem in Computer Science.
*/


const dateNew = new Date();

console.log(dateNew); // الوقت الحالي بالضبط بالتاريخ


// 1709729967710 => الوقت دا مكتوب بالمللى ثانيه من اول تاريخ 1970 لحد اللحظه الي بكتب فيها الكلام ده
console.log(Date.now()); // 1000 mill-seconds = 1 second 


// Number Of Seconds => 1709733104.978
let seconds = Date.now() / 1000; 
console.log(seconds); 


// Number Of Minutes => 28495552.63171667
let minutes = seconds / 60; 
console.log(minutes);  


// Number Of Hours => 474925.89154750004
let hours = minutes / 60; 
console.log(hours); 


// Number Of Days => 19788.579585497686
let days = hours / 24; 
console.log(days); 


// Number Of Years => 54.21528965439497
let years = days / 365; 
console.log(years);  