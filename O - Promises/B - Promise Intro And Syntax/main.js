
// Asynchronous
let myPromise = new Promise((resolve, reject) => {
    
    let isSuccess = true;
    
    if(isSuccess) {
        resolve();
    }
    else {
        reject();
    }
});

myPromise.then(
    (resolve) => console.log('true'),
    (reject) => console.log('false'),
);

console.log(myPromise);




const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('fulfilled');
    }, 2000);
});

promise.then((value) => {
    console.log(value);
});
