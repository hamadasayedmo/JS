/*
    Ajax
    - Ready State => Status Of The Request
    [0] Request Not Initialized
    [1] Server Connection Established
    [2] Request Received
    [3] Processing Request
    [4] Request Is Finished And Response Is Ready
    - Status
    [200] Response Is Successful
    [404] Not Found
*/


let req = new XMLHttpRequest();

req.open('get', 'https://api.github.com/');
req.send();


// Chick (Request & Response) Is Good
req.onreadystatechange = function () {

    console.log(this.readyState);
    console.log(this.status);

    if(this.readyState == 4 && this.status == 200) {
        // return JSON File
        console.log(this.responseText); 
    }
}

console.log(req);
