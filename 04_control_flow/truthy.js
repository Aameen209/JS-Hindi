const email = "xyz123@yopmail.com" //empty string will show else part
if (email){
    console.log("User have email");
}
else{
    console.log("Don't have email");
}

//falsy Values other than these all are truthy values
// false, 0, -0, Bigint 0n, "", null, undefined, NaN

//Special truthy value
// "0", 'false', " "(Space in btw string),[], {}, function(){}, 

const empArray = [] //empty Array will show if part because it's true as per rule
// To check if array is empty
if (empArray.length === 0){
    console.log("Empty Array");
}

const emptyObj = {}
if (Object.keys(emptyObj.length === 0)) {
    console.log("Object is empty");   
}

//Nullish Coalescing Operator (??): null undefined
let val1;
val1 = 1 ?? 2 //first one is assigned
val1 = null ?? 3 //3
val1 = undefined ?? 4 //4
val1 = null ?? 5 ?? 6 //5
console.log(val1);

// Ternary Operator 
// condition ? true  : false
const price = 100
price <= 80 ? console.log("less than 80") : console.log("more than 80");

