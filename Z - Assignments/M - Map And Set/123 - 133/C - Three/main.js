let myInfo = {
    username: "Osama",
    role: "Admin",
    country: "Egypt",
};

const myMap = new Map(Object.entries(myInfo));

console.log(myMap); // Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
console.log(myMap.size); // 3
console.log(myMap.has('role')); // true
