/*
    Arrays Methods [Adding And Removing]
    - unshift("", "") Add Element To The First
    - push("", "") Add Element To The End
    - shift() Remove First Element From Array
    - pop() Remove Last Element From Array
*/


let myFriends = ["fares" , "hamada" , "osman" , ["mohamed" , "kareem"]];

myFriends.unshift("Aya")
console.log(myFriends);
// [ 'Aya', 'fares', 'hamada', 'osman', [ 'mohamed', 'kareem' ] ]


let first = myFriends.shift();
console.log(`first removing: ${first}`);// 'first removing: Aya'


myFriends.push("sayed" , "selim")
console.log(myFriends);
// [ 'fares','hamada','osman',[ 'mohamed', 'kareem' ],'sayed','selim' ]


let last = myFriends.pop()
console.log(`last removing: ${last}`); //' last removing: selim'

console.log(myFriends);
// [ 'fares', 'hamada', 'osman', [ 'mohamed', 'kareem' ], 'sayed' ]