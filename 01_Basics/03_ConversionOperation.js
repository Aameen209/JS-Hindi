let score = "Aameen" // score is a string
let a = null // a is null
let b = undefined // b is undefined
let c = 0 // c is a number (0)
let d = "33abc" // d is a string
let e = "abc123" // e is a string
let f = true
let g =  false
let h = 1
let i = 0
let j = "Aameen"
let k = ""
let =  // Syntax error: f is not assigned any value, // f is undefined (no value assigned)

// console.table(typeof ([score,a,b,c,d,e])); // Incorrect: typeof should not be used with an array in this way
// console.log(typeof[(score,a,b,c,d,e)]); // Incorrect: typeof expects a single expression, not an array.

// Display types of each variable in a table format
console.table([typeof score, typeof a, typeof b, typeof c, typeof d, typeof e, typeof f, typeof g])

// let valueInNumber = Number[(score,a,b,c,d,e)] // Incorrect: The `Number` function should be called with a single argument, not an array.console.log(typeof valueInNumber);
let valueInNumber = [
    Number(score), // NaN (not a number)
    Number(a), // 0
    Number(b), // NaN
    Number(c), // 0
    Number(d), // NaN (invalid number)
    Number(e)  // NaN (invalid number)
];
// console.log(typeof valueInNumber)
console.log(valueInNumber);
let booleantrue = Boolean(f) // true
    console.log(booleantrue)

    let booleanfalse = Boolean(g) // false
    console.log(booleanfalse)

    let boolean1 = Boolean(h) // true
    console.log(boolean1)

    let boolean2 = Boolean(i) // false
    console.log(boolean2)

    let booleanstring = Boolean(j) // true
    console.log(booleanstring)
    let booleanemptystring = Boolean(k) // false
    console.log(booleanemptystring)

// // let "33" => 33
// // let "33abc" => NaN
// //  true => 1; false => 0

// let isLoggedIn = "Aameen"

// let booleanIsLoggedIn = Boolean(isLoggedIn)
// //  console.log(booleanIsLoggedIn);

// // 1 => true; 0 => false
// // "" => false
// // "Aameen" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

let valuenull = null

let stringnull = String(valuenull)
console.log(stringnull);
console.log(typeof stringnull);

let valueArray = [null, 33];

let stringArray = String(valueArray);
console.log(stringArray);
console.log(typeof stringArray);


let valueUndefined = undefined;
let stringUndefined = String(valueUndefined);
console.log(stringUndefined);
console.log(typeof stringUndefined);

let valueZero = 0;
let stringZero = String(valueZero);
console.log(stringZero);
console.log(typeof stringZero);

let valueTrue = true;
let stringTrue = String(valueTrue);
console.log(stringTrue);
console.log(typeof stringTrue);

let valueEmpty = "";
let stringEmpty = String(valueEmpty);
console.log(stringEmpty);
console.log(typeof stringEmpty);

let valueAameen = "Aameen";
let stringAameen = String(valueAameen);
console.log(stringAameen);
console.log(typeof stringAameen);

// // *********************** Operations ***********************

console.log("10" + 5); // "105" (string + number = concatenation)
console.log("10" - 5); // 5 (string is converted to number for subtraction)
console.log("10" * 2); // 20 (string is converted to number for multiplication)
console.log("10" / 2); // 5 (string is converted to number for division)

console.log("hello" + 5); // "hello5" (string + number = concatenation)
console.log("5" + "5"); // "55" (string + string = concatenation)

console.log(true + "5"); // "true5" (boolean + string = concatenation)
console.log("5" + false); // "5false" (string + boolean = concatenation)

console.log(1 + "hello"); // "1hello" (number + string = concatenation)
console.log("hello" + 1); // "hello1" (string + number = concatenation)
console.log("1" + "2" + "3"); // "123" (string + string + string = concatenation)

console.log(1 + 2 + "3"); // "33" (numbers added first, then string concatenation)
console.log("1" + (2 + 3)); // "15" (addition inside parentheses first, then concatenation)
console.log((1 + 2) + "3"); // "33" (addition inside parentheses first, then concatenation)


// let value = 3
// let negValue = -value
// console.log(negValue);

// console.log(2+2); = 4
// console.log(2-2); = 0
// console.log(2*2); = 4
// console.log(2**3); 2^3=8
// console.log(4/2); = 2
// console.log(3%6); remainder = 3

let str1 = "hello";
let str2 = " Aameen";

let str3 = str1 + str2;
console.log(str3); // "hello Aameen" (concatenation)

// console.log( (5 + 5) * 2 % 8); // 4

// console.log(+true); // 1
// console.log(+""); // 0

let num1, num2, num3;

num1 = num2 = num3 = 2 + 2;
// console.log(num1); // 4

// let gameCounter = 100;
// ++gameCounter; // preincrement
// gameCounter++; // postincrement
// console.log(gameCounter); // 102

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion