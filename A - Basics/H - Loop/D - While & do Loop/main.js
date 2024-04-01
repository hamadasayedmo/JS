/*
Loop
    - While
    while (condition) {
        block of code
    }
*/

const fruits = ["apple","banana","orange","grape"];
i = 0;

while(i < fruits.length) {
    console.log(fruits[i]);
    i++;
}
// i = 4

while(i < 10) {
    console.log(i);
    i++;
}
// output
// 4
// 5
// 6
// 7
// 8
// 9



/*
    Loop
    - Do / While

    do {
        Run the code here first
    } while (false);
*/
    console.log("do while loop");

    
let x = 0;

do {
    console.log(x);
    x++;
} while (false);

console.log(x);
// output
// 0
// 1
