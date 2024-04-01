
let car = new Object({
    salary: "3000000$",
});

console.log(car); // {salary: '3000000$'}


car.type = "BMW";
car.salary = "4000000$";
car.speed = () => `340 km`;


console.log(car["type"]);  // BMW
console.log(car.salary);   // 4000000$
console.log(car.speed());  // 340 km 