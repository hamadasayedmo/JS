/*
    Comparison Operators
    - == Equal
    - != Not Equal

    - === Identical
    - !== Not Identical

    - > Larger Than
    - >= Larger Than Or Equal

    - < Smaller Than
    - <= Smaller Than Or Equal
*/

// true => Compare Value
console.log(10 == 10);
console.log(10 == '10');
console.log(10 == "10");

// false => Compare Value
console.log(10 != 10);
console.log(10 != '10');
console.log(10 != "10");

// true Identical => Compare Value + Type
console.log(10 === 10);
console.log(10 !== '10');
console.log(10 !== "10");

// true => Compare Value
console.log(10 > "0");
console.log(10 >= "10");
console.log(10 < 20);

// false => type is (string) value (not equal) 
console.log("hamada" === "fares");

// true => type is (string) value (equal) 
console.log("hamada" === "hamada");

// true 
console.log("hamada" !== "fares");

// question inter view 
console.log(typeof "hamada" === typeof "fares"); // true