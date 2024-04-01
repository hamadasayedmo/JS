/*
    Challenge 1
*/

/*
    let a = 10;
    let b = "20";
    let c = 80;

    console.log(++a + +b++ + +c++ - +a++);      // 11 + 20 + 80 - 11 = 100
    console.log(++a + -b + +c++ - -a++ + +a);   // 11 + -20 + 80 -11 + 12 = 94
    console.log(--c + +b + --a * +b++ - +b * a + --a - +true); // 79 + 20 + 9 * 20 - 20 * 10 + 9 - 1 = 97
*/

/*
    [++a] [+]
    [++a]
    - Value:
    - Explain:
    [+]
    - Explain:
*/




/*
    Challenge 2
*/

let d = "-100";
let e = "20";
let f = 30;
let g = true;

console.log(-d * +e); // 2000
console.log(-d + ++e * ++g + ++f); // 100 + (21 * 2) + 31 = 173