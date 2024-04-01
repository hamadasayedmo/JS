

let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahout", "Osama"];

console.log(Array.from(new Set(myFriends)).sort()); // ['Ahmed', 'Mahout', 'Osama', 'Sayed']
console.log([...new Set(myFriends)].sort());        // ['Ahmed', 'Mahout', 'Osama', 'Sayed']