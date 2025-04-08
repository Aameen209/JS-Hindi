// array

// const ar = [0,1,2,3,Aameen,true ]

const myarr = [0,1,2,3,4,5] //numbers in array
const myarr2 = ["a,b,c"] //alphabets in array
const myarr3 = new Array(3,4,5) //this will automatically apply squares also A should Capital in array
// console.log(myarr[1]);

// Array Methods

// myarr.push(7);
// console.log(myarr);
// myarr.pop();
// console.log(myarr);

// myarr.unshift(8);
// console.log(myarr);
// myarr.shift();
// console.log(myarr);

// console.log(myarr.includes(9)); //False because the value 9 it's not there
// console.log(myarr.indexOf(2)); //get the index for the valid one and give -1 if not in array

// const  newarr = myarr.join() //join will bind the value and convert into string
// console.log(myarr); //Array
// console.log(newarr); // String

console.log("A ", myarr); // Output: A [ 0, 1, 2, 3, 4, 5 ]

const myn1 = myarr.slice(1, 3); //Slice doesn't include 3 value also the original array is same 
console.log(myn1); // Output: [ 1, 2 ]
console.log("B ", myarr); // Output: B [ 0, 1, 2, 3, 4, 5 ]

const myn2 = myarr.splice(1, 3); //Splice includes the 3rd value also cut the original array & give the removed portion
console.log(myn2); // Output: [ 1, 2, 3 ] = Removed items
console.log("C ", myarr); // Output: C [ 0, 4, 5 ] = remaining items
