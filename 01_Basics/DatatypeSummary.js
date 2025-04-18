//  Primitive(Stack) = It gives the copy when calling
let myCustomer = harryCooper
let anotherCustomer = myCustomer
anotherCustomer = "BTOL"
console.log(anotherCustomer);

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3
console.log(score);              // Output: 100
console.log(scoreValue);         // Output: 100.3


const isLoggedIn = false
console.log(isLoggedIn);         // Output: false

const outsideTemp = null
console.log(typeof outsideTemp); // Output: object (typeof null is a JS quirk)

let userEmail; //undefined  

const id = Symbol('123')
console.log(typeof id)           // Output: symbol

const anotherId = Symbol('123')
console.log(anotherId)           // Output: Symbol(123) (Symbols are unique)

// Comparing two symbols
console.log(id === anotherId);   // Output: false (Symbols are unique)

const bignumber = 3444444445678; // Regular number
const bignumberN = 3444444445678n; // BigInt

console.log(bignumber); // 3444444445678 (regular number)
console.log(typeof bignumber); // "number" (type is number)

console.log(bignumberN); // 3444444445678n (BigInt)
console.log(typeof bignumberN); // "bigint" (type is bigint)




// Reference (Non primitive)(Heap) = It gives the Reference only 
// Heap Example : 
let userone = {
    email: "hi@world.com",
    upi: "user@ubl"
}
let usertwo = userone

usertwo.email = "test@123.com" 
console.log(userone.email);     // Output: test@123.com (Both refer to the same object)
console.log(usertwo.email);     // Output: test@123.com (Both refer to the same object)


// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "baalveer"];
let myObj = {
    name: "Aameen", //object
    age: 22,
}
console.log(heros);              // Output: ["shaktiman", "naagraj", "baalveer"] (Array)
console.log(myObj);              // Output: {name: "Aameen", age: 22} (Object)

console.log(typeof heros);       // Output: object (Arrays are objects in JS)
console.log(typeof myObj);       // Output: object (Objects are reference types)

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof myFunction);  // Output: function (Functions are reference types)

// https://262.ecma-international.org/5.1/#sec-11.4.3
