//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3
console.log(score);
console.log(scoreValue);


const isLoggedIn = false
console.log(isLoggedIn);

const outsideTemp = null
console.log(typeof outsideTemp);

let userEmail;

const id = Symbol('123')
console.log(typeof id)

const anotherId = Symbol('123')
console.log(anotherId)


console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "Aameen",
    age: 22,
}
console.log(heros);
console.log(myObj);

console.log(typeof heros);
console.log(typeof myObj);


const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3