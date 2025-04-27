const user = {
    username : "Mansab",
    price : "Free",
    Welcome: function(){ //for object we can use this method
        console.log(`${this.username},fREE iN sALE`); //this referes to the current context
        // console.log(this); //this will log Both object user for aameen and khan
        
    }
}
user.Welcome()
user.username = "Nadeem" //
user.Welcome()
// console.log(this); //Empty {} because we are in node environment and no context in global


function chai(){
    console.log(this);
}
// chai()

function abc(){
    let userabc = "Abc123"
    console.log(userabc); //Abc123
    console.log(this.userabc); //Undefined, we can;t use this for a function
}
abc()

const xyz = function (){
    let userxyz = "Xyz123"
    console.log(userxyz); //Xyz123
    console.log(this.userxyz); //Undefined, we can;t use this inside a function
}
xyz()
// Arrow Function
const def = () =>{
    let userdef = "def123"
    console.log(userdef); //def123
    console.log(this.userdef); //Undefined, we can;t use this inside a function
    console.log(this); //{}empty object
}
def()

const test1 = (num1,num2)=> {
return num1+num2 // {} me return likhna padega, Explicit return jab aapko return lagana padta
}
console.log(test1(4,6));

const add = (num1,num2) => num1 + num2
console.log(add(10,5));
const sub = (num1,num2) => (num1 - num2) //implicit return jab aapko return nahi likhna padta
console.log(sub(8,4));

const new1 = (num1,num2) => {user: "Error"} //undefined
const new2 = (num1,num2) => ({user: "Working"}) // { user: 'Working' }

console.log(new1(2,4));
console.log(new2(5,6));

const myArray = [1,2,3]
myArray.forEach(function(){}) //correct Syntax
myArray.forEach(()=>{}) //correct Syntax
