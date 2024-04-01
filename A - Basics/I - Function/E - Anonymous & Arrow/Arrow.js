/*
    Function
    - Arrow Function
    -- Regular vs Arrow [Param + No Param]
    -- Multiple Lines
    - Es6 => anfn , nfn

*/
console.log("%c Arrow function" , "color: red");



let sum = (num1 , num2) => num1 + num2;
console.log(sum(1, 2));




let sayHi = (name , age) => {
    return `Hi ${name} I'm ${age} Yer`;
}
console.log(sayHi("Hamada" , 20));

/* 
    syntax 
    - anfn    
        (params) => {
            
        }

    - nfn
        const name = (params) => {
            
        }
*/




console.log("%c Function Arrow Challenges" , "color: red");
// [1] One Statement In Function
// [2] Convert To Arrow Function
// [3] Print The Output [Arguments May Change]


/* 
-- Regular Function
        let names = function (...names) {
            return `[${names.join("] , [")}]=> Done!`;
        };
*/


// use arrow functions
let names = (...names) => `[${names.join("] , [")}]=> Done!`;

console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));
// String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !



/*=================================*/



// [1] Replace ??? In Return Statement To Get The Output
// [2] Create The Same Function With Regular Syntax
// [3] Use Array Inside The Arguments To Get The Output

let myNumbers = [20, 50, 10, 60];

let calc = (one, two, ...num) => `${one + two + Number(num)}`;

console.log(calc(10, myNumbers[0], myNumbers[1])); // 80