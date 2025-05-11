//SC-1 for of array loop
const arr = [1,2,3,4,5]
for (const num of arr) {
    // console.log(num); //for of me seedhe value aa rahi hai
}
//SC-2 for of string loop
const greeting = "Hello"
for (const greet of greeting) {
    // console.log(`each char is ${greet}`);   
}
//SC-3
// Map is a object which hold key and pair values
const map = new Map()
map.set('In','india')
map.set('Us','america')
map.set('fr','france')
map.set('In','india') // Map doesn't have any duplicate values it have always unique values
console.log(map); //agar string me chahiye toh aur ek saath
for (const key of map) { // agar ek saath chahiye toh aur array me
    console.log(key);
}
for (const [key, value] of map){ //Destructure(agar key and values alag alag chahiye toh) without array for of loop
    console.log('Key is',key, ':-' ,'value is',value);
}
// SC-4
const myobj = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}

// for (const [key, value] of myobj) { // myobj is not iterable(for of with object)
//      console.log(key, ':-', value );
// }