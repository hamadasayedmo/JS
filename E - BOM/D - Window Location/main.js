/*
    BOM [Browser Object Model]
    - location Object
    --- href Get / Set [URL || Hash || File || Mail]
    --- host
    --- hash
    --- protocol
    --- reload()
    --- replace()
    --- assign()
*/


console.log(location.href);     // http://127.0.0.1:5500/
location.href = 'https://google.com'; // google
location.href = '/#sec02';      // Section Two

console.log(location.host);     // 127.0.0.1:5500
console.log(location.hostname); // 127.0.0.1
console.log(location.port); // 5500

console.log(location.protocol); // http:

console.log(location.reload);

location.replace('https://google.com');
location.assign('https://google.com');