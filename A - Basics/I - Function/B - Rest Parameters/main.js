/*
    Function
    - Rest Parameters
    - Only One Allowed
    - Must Be Last Element
*/


function calc(...numbers) {  // ...numbers = > Array Of Argument
    
    console.log(Array.isArray(numbers)); // true

    let sum = 0;
    for(let i = 0 ; i < numbers.length ; i++) {
        sum += numbers[i];
    }
    console.log(sum); // 15
}
calc(1 , 2 , 3 , 4 , 5); 