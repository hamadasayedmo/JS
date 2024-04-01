/*
    String Methods
    - Access With Index
    - Access With charAt()
    - length
    - trim()
    - toUpperCase()
    - toLowerCase()
    - Chain Methods
*/

let theName = "   Hamada   ";

console.log(theName); //    Hamada     

console.log(theName[5]); // m  
console.log(theName.charAt(5)); // m

console.log(theName.length); // 12

console.log(theName.trim()); // Hamada
console.log(theName.trim().length); // 6

console.log(theName.toUpperCase()); //    HAMADA 
console.log(theName.toLowerCase()); //    hamada   

console.log(theName.toUpperCase().trim()); // HAMADA
console.log(theName.toLowerCase().trim()); // hamada

// Chain Methods
console.log(theName.trim().charAt(2).toUpperCase()); // M