/*
    Promise And XHR
*/


let myData = (apiLink) => {
    return new Promise((resolve, reject) => {
        
        let req = new XMLHttpRequest();
        req.onload = function () {
            if(this.readyState === 4 && this.status === 200) {
                resolve(JSON.parse(req.responseText)); 
            }
            else {
                reject(Error('Not Found'));
            }
        }; 

        req.open('GET',apiLink);
        req.send();
    });
};


myData('https://api.github.com/users/elzerowebschool/repos')
    .then((value) => {
        value.length = 5;
        return value;
    })
    .then((value) => {
        console.log(value[0].name);
    })
    .catch((err) => {
        console.log(err);
    })
