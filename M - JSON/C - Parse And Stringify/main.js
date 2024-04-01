/*
    JSON
    - JSON.parse => Convert Text Data To JS Object
    - JSON.stringify => Convert JS Object To JSON
*/


let myJSON = '{"username": "Hamada", "id": "621224"}';
console.log(typeof myJSON); // string
console.log(myJSON);        // '{"username": "Hamada", "id": "621224"}'


// Convert ('JSON' Object To 'JS' Object)
let myJsonToJs = JSON.parse(myJSON);
console.log(typeof myJsonToJs);     // object
console.log(myJsonToJs);            // { username: 'Hamada', id: '621224' }
                                    // id: "621224"
                                    // username: "Hamada"
                                    // [[Prototype]]: Object


myJsonToJs.username = 'Ali';
myJsonToJs.id = '612524';
console.log(typeof myJsonToJs);     // object
console.log(myJsonToJs);            // {username: 'Ali', id: '612524'}
                                    // id: "612524"
                                    // username: "Ali"
                                    // [[Prototype]]: Object



// Convert ('JS' Object To 'JSON' Object)
let myJsToJson = JSON.stringify(myJsonToJs);
console.log(typeof myJsToJson);   // string
console.log(myJsToJson);          // '{"username":"Ali","id":"612524"}'