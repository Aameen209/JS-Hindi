
// Q1 Print even numbers between 1 and 100
for (let i = 2; i <= 10; i += 2) {  // Start at 2 and increment by 2 for even numbers
    // console.log(i);  
}

//Q2 Print the multiplication table of 5
for (let i = 1; i <= 10; i++) { 

    // console.log(`Table of 5 * ${i} = ${5 * i}`);  // Directly print the multiplication table for 5
}
// const string = {Aameen}

//Q3 Sum of Numbers from 1 to 100
let sum = 0
for (let i = 1; i < 100; i++) {
    sum +=i;    // add i to sum also we can write sum = sum + i
}
// console.log(sum);
// Q4 Print elements of an array
let fruits = ["apple", "banana", "cherry"];
for (let index = 0; index < fruits.length; index++) {
    const element = fruits[index];
    // console.log(element);   
}

//Q5 Count down from 10 to 1
for (let index = 10; index >= 1; index--) {
    // console.log(index);   
}

//Q6 Print "Hello" 5 times
for (let index = 1; index <= 10; index++) {
// console.log(`Meri Behne Chudail`);   
}

//Q7 Print elements of an array in reverse
let colors = ["red", "green", "blue", "yellow"];
for (let index = colors.length - 1; index >= 0; index--) {
// console.log(colors[index]);
}

//Q8 Print the square of numbers from 1 to 10
for (let i = 1; i < 10; i++) {
    // console.log(`squrare of ${i} is`, i*i );
}

//Q9 Count the number of even numbers in an array
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] //arr
let evencount = 0 //
for (let i = 0; i < numbers.length; i++) {
    if ([i]%2 === 0) {
        // console.log(i);
        evencount++;
    }    
}
// console.log(`total number of even numbers is ${evencount}`);

// Q10 Create a pattern with asterisks (*)

for (let i= 1; i<=5; i++){ //for (let i= 5; i>= 1; i--){ for oppposite
    let stars = " ";
    
    for (let j=1;j<=i;j++){
        stars += "*"   
    }
    console.log(stars);
    
}