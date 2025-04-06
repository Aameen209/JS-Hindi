// const score = 100
// console.log(score); //100(Autmatically Number)

// const marks = new Number(200)
// console.log(marks); //[Number: 200]

// const balance = new Number(300)
// console.log(balance.toString()); //300 as String
// console.log(balance.toString().length); //length = 3(String)
// console.log(balance.toFixed(2)); // for 2 = 300.00 for 3 =300.000

// const decimal = 47.89888; // Precision works on total significant digits, rounding accordingly.

// console.log(decimal.toPrecision(3)); // 47.9   -> Rounds to 3 significant digits.
// console.log(decimal.toPrecision(2)); // 48     -> Rounds to 2 significant digits.
// console.log(decimal.toPrecision(5)); // 47.899 -> Rounds to 5 significant digits.
// console.log(decimal.toPrecision(1)); // 5e+1   -> 1 significant digit in scientific notation.
// console.log(decimal.toPrecision(6)); // 47.8989 -> Rounds to 6 significant digits.

// const largeNumber = 1234567.89888;
// console.log(largeNumber.toPrecision(4)); // 1.235e+6 -> Large number in scientific notation (4 significant digits).

// const smallNumber = 0.000123796;
// console.log(smallNumber.toPrecision(2)); // 0.00012 -> Rounds to 2 significant digits.
// console.log(smallNumber.toPrecision(3)); // 0.000123 -> Rounds to 3 significant digits.

// const negativeDecimal = -47.89888;
// console.log(negativeDecimal.toPrecision(4)); // -47.90 -> Rounds to 4 significant digits, keeping the negative sign.

// const hundreds = 1000000
// console.log(hundreds.toLocaleString());//By default us = 1,000,000
// console.log(hundreds.toLocaleString('en-IN'));//By default Indian format = 10,00,000

//+++++++++  Maths ++++++++++++
// console.log(Math.abs(-4)); // 4 :Convert into Positive 
// console.log(Math.abs(4)); // 4 :It's already positive
// console.log(Math.round(4.6)); // 5: Choose Roundn off Value
// console.log(Math.ceil(4.2)); // 5 : Ceiling Value, Rounds up, even if the decimal is small(and round off to the highest value)
// console.log(Math.floor(4.9)); // 4 : Floor Value, Rounds down no matter how large the decimal is(and round off to the lowest value)
// console.log(Math.min(5,6,3,4,9));
// console.log(Math.max(6,5,4,9,8,9));

console.log(Math.random()); //Always between 0 and 1 and randomly
console.log((Math.random()*10)+1); // 5.9418045480852495 now between 1 to 10
console.log(Math.floor((Math.random()*10)+1)); //8

const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max-min+1))+  min) // intead of this *10)+1) we're using *(max-min+1)
console.log(Math.floor(Math.random()*(max-min+1))+  max)

