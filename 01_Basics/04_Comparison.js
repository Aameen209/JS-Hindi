/********Basic Comparisons (>, >=, <, ==, !=)********/

// console.log(2 > 1);   // true  (2 is greater than 1)
// console.log(2 >= 1);  // true  (2 is greater than or equal to 1)
// console.log(2 < 1);   // false (2 is not less than 1)
// console.log(2 == 1);  // false (2 is not equal to 1)
// console.log(2 != 1);  // true  (2 is not equal to 1)

/******Comparing Strings with Numbers******/
console.log("2" > 1);   // true  ("2" is converted to number 2, and 2 > 1)
console.log("02" > 1);  // true  ("02" is converted to 2, and 2 > 1)

/****** / NULL in Comparisons *****/
console.log(null > 0); //False
console.log(null == 0); // False 
console.log(null >= 0); // Comparison converts null into a number treating it as 0, that's why (3)null >= 0 is true and (1)null >0 is false

/****** / UNDEFINED in Comparisons *****/
//undefined is not converted to 0 and results in false in all cases
console.log(undefined == 0);  // false (undefined is only equal to null)
console.log(undefined > 0);   // false (undefined is treated as NaN)
console.log(undefined < 0);   // false (undefined is treated as NaN)

/****** Strict Equality (===) ******/

// console.log("2" === 2); //checks both value and data-type =>false