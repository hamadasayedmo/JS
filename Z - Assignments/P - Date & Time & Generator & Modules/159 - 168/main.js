
//========================== One ====================================//

let newDate = new Date();

let birthDay = new Date('Aug 6, 2003');

let diff = newDate - birthDay;

console.log(diff / 1000 / 60 / 60 / 24 / 365);

console.log(`${parseInt(diff / 1000)} Seconds`);                            // 650073631 Seconds
console.log(`${parseInt(diff / 1000 / 60)} Minutes`);                       // 10834560 Minutes
console.log(`${parseInt(diff / 1000 / 60 / 60)} Hours`);                    // 180576 Hours
console.log(`${parseInt(diff / 1000 / 60 / 60 / 24)} Days`);                // 7524 Days
console.log(`${parseInt(diff / 1000 / 60 / 60 / 24 / 30)} Months`);         // 250 Months
console.log(`${parseInt(diff / 1000 / 60 / 60 / 24 / 30 / 12)} Years`);     // 20 years


//============================ Two =====================================//

let dateAfterTenYear = new Date('1980');

dateAfterTenYear.setSeconds(1);
dateAfterTenYear.setHours(0);

console.log(dateAfterTenYear); // Tue Jan 01 1980 00:00:01 GMT+0200


//============================ Three ==================================//

let monthDayBack = new Date();

monthDayBack.setDate(0);

console.log(monthDayBack); // Thu Feb 29 2024 23:20:42 GMT+0200

let Months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// Previous Month Is Feb  And Last Day Is 29
console.log(`Previous Month Is ${Months[monthDayBack.getMonth()]}  And Last Day Is ${monthDayBack.getDate()}`); 


//============================ Four ===============================//

let birthOne = new Date('Aug 6 2003');
let birthTwo = new Date('6/Aug/2003');
let birthThree = new Date('2003-6-Aug');

console.log(birthOne);    // Wed Aug 06 2003 00:00:00 GMT+0300
console.log(birthTwo);    // Wed Aug 06 2003 00:00:00 GMT+0300
console.log(birthThree);  // Wed Aug 06 2003 00:00:00 GMT+0300


//============================ Five ===============================//

const start = performance.now();

for (let i = 0; i < 99999; i++) { 
    // document.write(`<div>${i}</div>`)
}

const end = performance.now(); 

let duration = end - start;

console.log(`Loop Took ${parseInt(duration)} Milliseconds.`); // Loop Took 13617 Milliseconds.


//============================ Six ===============================//

function* gen(){
    let index = 14;
    let num = 140;
    let sum = index + num;
    while(true){
        yield sum;
        sum += num += 200;
    }
}

let generator = gen();

console.log(generator.next()); // {value: 14, done: false}
console.log(generator.next()); // {value: 154, done: false}
console.log(generator.next()); // {value: 494, done: false}
console.log(generator.next()); // {value: 1034, done: false}
console.log(generator.next()); // {value: 1774, done: false}
console.log(generator.next()); // {value: 2714, done: false}
console.log(generator.next()); // {value: 3854, done: false}
console.log(generator.next()); // {value: 5194, done: false}
console.log(generator.next()); // {value: 6734, done: false}


//============================ Seven ===============================//

function* genNumbers() {
    yield* [1, 2, 2, 2, 3, 4, 5];
}
function* genLetters() {
    yield* ["A", "B", "B", "B", "C", "D"];
}

// Write Your Generator Function Here
function* genAll() {
    yield* new Set(genNumbers());
    yield* new Set(genLetters());
}

let generate = genAll();

console.log(generate.next()); // {value: 1, done: false}
console.log(generate.next()); // {value: 2, done: false}
console.log(generate.next()); // {value: 3, done: false}
console.log(generate.next()); // {value: 4, done: false}
console.log(generate.next()); // {value: 5, done: false}
console.log(generate.next()); // {value: "A", done: false}
console.log(generate.next()); // {value: "B", done: false}
console.log(generate.next()); // {value: "C", done: false}
console.log(generate.next()); // {value: "D", done: false}