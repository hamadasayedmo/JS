// Assignment One 
let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
console.log(myFriends.slice(myFriends.length - myFriends.length , num)); // ["Ahmed", "Elham", "Osama"];

// Method 2
console.log(myFriends.slice(-myFriends.length ,  num - myFriends.length)); // ["Ahmed", "Elham", "Osama"];




// Assignment Two 
let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here
friends.pop();
friends.shift();

console.log(friends); // ["Eman", "Osama"]




// Assignment Three
let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = arrOne.concat(arrTwo).sort().reverse();

// Write One Single Line Of Code

console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]




// Assignment Four
let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[website.length][0].slice(website.length).toUpperCase()); // ZERO




// Assignment Five
let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
if(haystack.includes(needle)) {
    console.log("Found");
}

if(haystack.indexOf(needle)) {
    console.log("Found");
}

if(typeof needle === typeof haystack[1]) {
    console.log("Found");
}




// Assignment Six
let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here

console.log(allArrs.concat(arr1 , arr2).sort().slice(arr2.length).join("").toLowerCase()); // fxy