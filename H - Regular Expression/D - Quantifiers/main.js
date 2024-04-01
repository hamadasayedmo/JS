/*
    Regular Expression

    Quantifiers
    n+    => One Or More
    n*    => zero or more
    n?    => zero or one
*/


// (n+)
let mails = "o@nn.sa osama@gmail.com elzero@gmail.net osama@mail.ru"; // All Emails

let mailsRe = /\w@\w\w.sa/ig;
console.log(mails.match(mailsRe)); // [ 'o@nn.sa' ]


let mailsNPlus = /\w+@\w+.(com|net)/ig;
console.log(mails.match(mailsNPlus));  // [ 'osama@gmail.com', 'elzero@gmail.net' ]




// (n*)
let numbers = "0110 10 150 05120 0560 350 00"; // 0 Numbers Or No 0

let numbersRe = /(0\d*0)/g;
console.log(numbers.match(numbersRe));




let urls = "https://google.com http://www.website.net web.com"; // http + https

let urlsRe = /(https?:\/\/)?(www.)?\w+.\w+/ig;
console.log(urls.match(urlsRe)); // [ 'https://google.com', 'http://www.website.net', 'web.com' ]






/*
    Regular Expression

    Quantifiers
    n{x}   => Number of
    n{x,y} => Range
    n{x,}  => At Least x
*/

let serials = "S100S S3000S S50000S S950000S";


console.log(serials.match(/S\d{3}S/ig));    // S[Three Number]S => [ 'S100S' ]
console.log(serials.match(/S\d{4,5}S/ig));  // S[Four Or Five Number]S => [ 'S3000S', 'S50000S' ]
console.log(serials.match(/S\d{4,}S/ig));   // S[At Least Four]S => [ 'S3000S', 'S50000S', 'S950000S' ]





/*
    Regular Expression

    Quantifiers
    $  => End With Something
    ^  => Start With Something
    ?= => Followed By Something
    ?! => Not Followed By Something
*/

let myString = "We Love Programming";
let names = "1OsamaZ 2AhmedZ 3Mohammed 4MoustafaZ 5GamalZ";

// if (ing) the end of the myString 
console.log(/ing$/g.test(myString)); // true

// if (We) the start of the myString 
console.log(/^We/g.test(myString)); // true


console.log(names.match(/\d\w{5}(?=Z)/g)); // [ '1Osama', '2Ahmed', '5Gamal' ]
console.log(names.match(/\d\w{8}(?!Z)/g)); // [ '3Mohammed' ]