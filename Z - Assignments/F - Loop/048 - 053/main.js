// Assignment One 
console.log("%c Assignment One","color: red");

let start_1 = 10;
let end_1 = 100;
let exclude = 40;

for (let i = start_1; i <= end_1 ; i += start_1) {
    if(i === exclude) {
        continue;
    }
    console.log(i);
}

// Output
// 10
// 20
// 30
// 50
// 60
// 70
// 80
// 90
// 100




// Assignment Two 
console.log("%c Assignment Two","color: red");

let start_2 = 10;
let end_2 = 0;
let stop = 3;

for(let i = start_2 ; i >= end_2 ; i--) {
    if(i < start_2)
    {
        console.log(`0${i}`);
    }
    else {
        console.log(`${i}`);
    }

    if(i === stop) {
        break;
    }
}

// Output
// 10
// 09
// 08
// 07
// 06
// 05
// 04
// 03




// Assignment Three 
console.log("%c Assignment Three","color: red");

let start_3 = 1;
let end_3 = 6;
let breaker = 2;

for(let i = start_3 ; i <= end_3 ; i++) {
    console.log(i);
    for(let j = breaker; j < end_3 ; j += breaker) {
        console.log(`-- ${j}`);
    }
}

// Output
// 1
// -- 2
// -- 4
// 2
// -- 2
// -- 4
// 3
// -- 2
// -- 4
// 4
// -- 2
// -- 4
// 5
// -- 2
// -- 4
// 6
// -- 2
// -- 4




// Assignment Four 
console.log("%c Assignment Four","color: red");

let index = 10;
let jump = 2;
i = index;
for (;;) {
    // Write Your Code Here
    console.log(index)
    index -= jump;
    if(index === jump) break; //
}

// Output
// 10
// 8
// 6
// 4




// Assignment Five 
console.log("%c Assignment Five","color: red");

let friends = ["Ahmed", "Sayed", "Hamada", "Fares", "Ameer", "Osama", "Same"];
let letter = "a";

for(let i = 0 ; i < friends.length; i++) {
    if(friends[i][0] == letter.toUpperCase()) {
        continue;
    }
    console.log(`"${i} => ${friends[i]}"`);
}

// Output
// "1 => Sayed"
// "2 => Hamada"
// "3 => Fares"
// "4 => Osama"
// "5 => Same"




// Assignment Six 
console.log("%c Assignment Six","color: red");

let start_6 = 0;
let swappedName = "elZerO";

let newArray = [];

for(let i = start_6; i < swappedName.length; i++) {
    if(swappedName[i] == swappedName[i].toUpperCase()) {
        newArray.push(swappedName[i].toLowerCase());
    }
    else {
        newArray.push(swappedName[i].toUpperCase());
    }
}
console.log(newArray.join(""));

// Output
// "ELzERo"




// Assignment Sven 
console.log("%c Assignment Sven","color: red");
let start_7 = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

for(let i = start_7 ; i < mix.length ; i++) {
    if(typeof mix[i] == "number") {
        if(mix[i] === 1) continue;
        console.log(mix[i]);
    }
}

// Output
// 2
// 3
// 4