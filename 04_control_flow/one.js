// if
// SC-1
// const isUserLogin = true 
// if  (2==="2"){ //=== check data type
// console.log("Hello World");
// }
// if  (2=="2"){ //=== check equ
// als only
//     console.log("Hello BRo");
//     }
// else {
//     console.log("Incorrect");
// }
// 2<=2
// < , > , <= , >= , == , != , === //Data types

// SC-2
// const temp = 40
// if (temp < 21){
// console.log("25");
// }
// else{
// console.log("3");   
// }
// console.log("execute");

// sc-3
// const score = 100
// if (score > 50) {
//     const Power = "Fly"
//     console.log(`User can ${Power}`);    
// }
// // console.log(`User can ${Power}`); // Power is not defined   

const balance = 100;
if(balance> 50) console.log("true"),console.log("2nd line"); //Implicit Not Recommended

const price = 100
if (price < 100) {
     console.log("less than 50");
}
else if (price < 75) {
    console.log("less than 75");   
}else if (price < 90) {
    console.log("less than 90");
}
else {
    console.log("less than 120");
}

const userlogin = true
const creditcard = true  
const loginfromgoogle = false
const guestlogin = true

if (userlogin && creditcard && 2==3){ // &&(and) = aur(Ampersand)
console.log("Allow to buy");
}
if (loginfromgoogle || guestlogin || loginfromgmail) { // ||(or) = ya
    console.log("user login successfully");   
}