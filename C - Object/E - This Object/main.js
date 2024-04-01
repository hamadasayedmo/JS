/*
    Function this Keyword
    - this Introduction
    - this Inside Object Method
    --- When a function is called as a method of an object,
    --- its this is set to the object the method is called on.
    - Global Object
    - Test Variables With Window And This
    - Global Context
    - Function Context

    Search
    - Strict Mode
*/


console.log(this === window); // true


myNum = 110;
console.log(window.myNum); // 110
console.log(this.myNum);   // 110


function sayHello() {
    return window;
}
sayHello();

console.log(this === sayHello()); // true



document.getElementById("cl").onclick = function () {
    console.log(this);  // <button id="cl">click</button>
};




let user = {
    age: 38,
    ageInDays: function () {
        console.log(this); // {age: 38, ageInDays: ƒ} Object
        return this.age * 365;
    },
};

console.log(user.age); // 38
console.log(user.ageInDays()); // 13870