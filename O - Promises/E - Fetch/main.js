/*
    Fetch Api
    - Return A Representation Of the Entire HTTP Response
*/

fetch('https://api.github.com/users/elzerowebschool/repos')
    .then((resolveValue) => {
        // console.log(resolveValue);   // return Response
        let myDate = resolveValue.json();
        // console.log(myDate);         // return Promise
        return myDate;
    }).then((result) => {
        result.length = 5;
        return result;
    }).then((full) => {
        console.log(full[0].name); // Ajax
    }).catch((err) => {
        console.log(Error('Not Found'));
    })




// let myData = (apiLink) => {
//     return new Promise((resolve, reject) => {
        
//         let req = new XMLHttpRequest();
//         req.onload = function () {
//             if(this.readyState === 4 && this.status === 200) {
//                 resolve(JSON.parse(req.responseText)); 
//             }
//             else {
//                 reject(Error('Not Found'));
//             }
//         }; 

//         req.open('GET',apiLink);
//         req.send();
//     });
// };


// myData('https://api.github.com/users/elzerowebschool/repos')
//     .then((value) => {
//         value.length = 5;
//         return value;
//     })
//     .then((value) => {
//         console.log(value[0].name);
//     })
//     .catch((err) => {
//         console.log(err);
//     })
