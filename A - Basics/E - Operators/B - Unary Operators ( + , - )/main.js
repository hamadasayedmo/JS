/*
    - + Unary Plus [Return Number If Its Not Number]
    - - Unary Negation [Return Number If Its Not Number + Negates It]
    Tests
    - Normal Number
    - String Number
    - String Negative Number
    - String Text
    - Float
    - Hexadecimal Numeral System => 0xFF
    - null
    - false
    - true
*/

// + Unary Plus
console.log(+100)
console.log(+"100")
console.log(+"-100")
console.log(+"Hamada") // NaN
console.log(+"15.5");
console.log(+0xff);
console.log(+true)
console.log(+false)
console.log(+null)


// - Unary Negation
console.log(-100)
console.log(-"100")
console.log(-"-100")
console.log(-"Hamada") // NaN
console.log(-"15.5");
console.log(-0xff);
console.log(-true)
console.log(-false)
console.log(-null)