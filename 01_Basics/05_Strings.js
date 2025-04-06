const name = "Aameen"
const age = 20
// console.log(name + age + 20);
//`` = backticks Prefer to Use
console.log(`Hello My name is ${name} and age is ${age}`); //Hello My name is Aameen and age is 20

const gameName = new String('Aameen')
console.log(gameName[1]); //a

const newString = gameName.substring(0, 3);
console.log(newString); //Aam

const anotherString = gameName.slice(-6, 4);
console.log(anotherString);

const diff = gameName.slice(2, -1);
console.log(diff);

const newStringOne = "          Aameen Khan  "
console.log(newStringOne); //          Aameen Khan
console.log(newStringOne.trim()); //Aameen Khan

const url = "www.go%20ogle.com" //brower automatically convert spaces into urln coding
console.log(url.replace('%20','-')); //replace the %20 into -

const newurl = "WWw.go%30ogl%30.com"
console.log(newurl.replaceAll('%30','@')); //Replace all the %30 into @

console.log(newurl.includes('WWw')); //True :  wwww not working but WWw working fine(Capitalisation Matters)

const hello = "Mohd-Aameen-Kh-an"
console.log(hello.split('-')); //split based on -



// const fullname = new String ("Mohd Aameen Khan"); // Example string

// // Log the prototype of the string
// console.log(fullname.__proto__); // String prototype

// // Log the length of the string
// console.log(fullname.length); // 8

// // Log the second character of the string
// console.log(fullname.at(1)); // "o"

// console.log(fullname.toUpperCase()); //MOHD AAMEEN KHAN
// console.log(fullname.toLowerCase()); //mohd aameen khan 


// // *********************** Non-Deprecated Methods ***********************

// console.log(fullname.charAt(1)); // "o" (charAt method)
// console.log(fullname.concat(" Pathan")); // "Mohd Aameen Khan Pathan" (concat method)
// console.log(fullname.includes("Mohd")); // true (includes method)
// console.log(fullname.indexOf("Khan")); // Khan start at index 12
// console.log(fullname.repeat(2)); // "Mohd Aameen KhanMohd Aameen Khan" (repeat method)
// console.log(fullname.slice(5, 11)); // "John" (slice method)
// console.log(fullname.split(" ")); // [ 'Mohd', 'Aameen', 'Khan' ] (split method)

// *********************** Deprecated Methods ***********************

// console.log(fullname.anchor); // Deprecated: anchor method
// console.log(fullname.blink); // Deprecated: blink method
// console.log(fullname.bold); // Deprecated: bold method
// console.log(fullname.fixed); // Deprecated: fixed method
// console.log(fullname.fontcolor); // Deprecated: fontcolor method
// console.log(fullname.fontsize); // Deprecated: fontsize method
// console.log(fullname.italics); // Deprecated: italics method
// console.log(fullname.link); // Deprecated: link method
// console.log(fullname.strike); // Deprecated: strike method
// console.log(fullname.sub); // Deprecated: sub method
// console.log(fullname.sup); // Deprecated: sup method



