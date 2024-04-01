/*
    Destructuring
    - Destructuring Function Parameters
*/


let user = {
    title: 'hamada',
    age: 20,
    id: 621224,

    skills: {
        cpp: 100,
        js: 80,
    }
}

showDetails(user);

function showDetails({title, age, id, skills: {js: javascript}} = user) {    
    
    console.log(title);         // hamada
    console.log(age);           // 20
    console.log(id);            // 621224
    
    console.log(javascript);    // 80
}