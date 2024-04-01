/*
    Loop Control
    - Break
    - Continue
    - Label
*/




const fruits = ["apple","banana","orange","grape"];

for(let i = 0 ; i < fruits.length ; i++) {
    if(fruits[i] === "banana") {
        continue;
    }
    if(fruits[i] === "grape") {
        break;
    }
    console.log(fruits[i]);
}




let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];

let colors = ["Red", "Green", "Black"];

mainLoop: 
for (let i = 0; i < products.length; i++) {
    console.log(products[i]);
    nestedLoop: 
    for (let j = 0; j < colors.length; j++) {
        if (colors[j] === "Green") {
            continue nestedLoop;
        }
        console.log(`- ${colors[j]}`);
    }
}




mainLoop:
for (let i = 1; i <= 5 ; i++) {
    childLoop:
    for (let j = 10; j <= 15; j++) {
        if(i === 3)
        {
            break childLoop;
        }
        console.log(`${i} => ${j}`)
    }
}