/*
    Object
    - Create Object With Create Method
*/

let user = {
    age: 20,
    doubleAge: function () {
        return this.age * 2;
    },
};

console.log(user);
console.log(user.age); // 20
console.log(user.doubleAge()); // 40


let obj = Object.create({});
obj.a = 100;

console.log(obj);




let copyObj = Object.create(user);

copyObj.age = 50;

console.log(copyObj);
console.log(copyObj.age); // 50
console.log(copyObj.doubleAge()); // 100