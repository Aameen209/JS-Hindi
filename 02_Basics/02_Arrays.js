// Array with one string element (all heroes in one string)
const hero = ["Thor,iron-man,Dc,Hello"]; 

// Array with one string element (all villains in one string)
const Villain = ["Test,Test1,Test2,Test3"];

hero.push(Villain);
console.log(hero);
// Output: [ 'Thor,iron-man,Dc,Hello', [ 'Test,Test1,Test2,Test3' ] ] // Adds Villain array as a single element

console.log(hero[1]);
// Output: [ 'Test,Test1,Test2,Test3' ] // Accessing the nested Villain array

// Merges hero and Villain arrays
const all = hero.concat(Villain);
console.log(all);
// Output: [ 'Thor,iron-man,Dc,Hello', [ 'Test,Test1,Test2,Test3' ], 'Test,Test1,Test2,Test3' ]

const allnew = [...hero, ...Villain]; // Spread operator (...) expands arrays into individual elements and merges them
console.log(allnew);
// Output: [ 'Thor,iron-man,Dc,Hello', 'Test,Test1,Test2,Test3' ]

// Nested array with mix of numbers and arrays
const anotherar = [1, 2, 3, [4, 5], 0, [[7, 8], 9], 5];

// Flattens `anotherar` completely into a single-level array
const realar = anotherar.flat(Infinity);
console.log(realar);
// Output: [ 1, 2, 3, 4, 5, 0, 7, 8, 9, 5 ] // Flattens deeply nested array

console.log(Array.isArray());
// Output: false .isArray checks if "2" is an array or not, and it's a string, not an array 

console.log(Array.from("2025"));
// Output: [ '2', '0', '2', '5' ] .from converted string "2025" into an array of characters


// Converts name string into character array
console.log(Array.from("Aameen"));
// Output: [ 'A', 'a', 'm', 'e', 'e', 'n' ]

// Returns empty array – object is not iterable by default
console.log(Array.from({ name: "Aameen" }));
// Output: []  // it provide an empty string because it can't convert this {}

let score1 = 100;
let score2 = 200;
let score3 = 300;

// Creates array from multiple individual values
console.log(Array.of(score1, score2, score3));
// Output: [ 100, 200, 300 ] .of created an array with the values of score1, score2, and score3

