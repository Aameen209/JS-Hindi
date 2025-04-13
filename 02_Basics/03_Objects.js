// Singleton
Object.create //Singleton create singleton object inside this through constructor method

//object literals is a way to create an object
const abc = {} //Object creation {}=Empty Object  

const mysymbol =  Symbol("Key1")

const Jsuser = {
    name: "Aameen", //by default name is converted into String : "name"
    "full name": "Md Aameen Khan", //there is no way to access this by using jsuser.full name
    [mysymbol]: "MyKey1", //when doing log for js user then it without [ ] behaving like normal key for string but with [] it's a symbol
    0: "19", //We can declare 0 and other value as well
    true: false, //we can declare boolean as well
    king: [0, 1]
}

console.log(Jsuser.king[0]); // 0
console.log(Jsuser["king[0]"]); // undefined
console.log(Jsuser["name"]); // Aameen    
console.log(Jsuser["full name"]); // Md Aameen Khan

console.log(typeof [mysymbol] ); // object

Jsuser.name = "Pathan"
console.log(Jsuser); // name: "Pathan"
// Object.freeze(Jsuser) // it wil;l free the data for jsuser
Jsuser.name = "Khan"
console.log(Jsuser.name); // Khan

//creating a function
Jsuser.greeting = function() {
    console.log("Hello greeting");   
}
console.log(Jsuser.greeting); // [Function (anonymous)]
console.log(Jsuser.greeting()); // Hello greeting, undefined

Jsuser.greetingtwo = function(){
    console.log(`hello  bhai, ${this.name}`); //hello  bhai, Khan , undefined    
}
console.log(Jsuser.greetingtwo()); // hello  bhai, Khan, undefined
