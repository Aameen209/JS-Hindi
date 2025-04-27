
var c = 300 //{global Scope} problem for var is still showing 30
// {} = Scope, comes with function or if else 
let a = 100
if (true){ //Block Scope
    let a = 10 // a is not defined
    const b = 20 //b is not defined
    // var c = 30
    // c = 30 //if i don't write var then still it's 30
    // console.log("Inner : ", a);    
}
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }

// console.log("Outer : ", a); //a is not defined also if i comment let a = 10
// console.log(b); // b is not defined if i comment const b = 20
// console.log(c); // 30

function one (){
        const username = "Aameen"

        function two () {
            const web = "youtube"
            console.log(username);
        }
        // console.log(web); //web is not defined
        two()  
}
// one ()

if (true) {
    const user = "Khan"
    if(user === "Khan"){
        const user2 = " Sahab"
        console.log(user + user2); //Khan Sahab 
    }
    // console.log(user2); //user2 is not defined
    
}
// console.log(user);
console.log(addone(5)); //6 we can log before function for declaration

function addone(num){ //only declaration
    return num+1
}
console.log(addone(2)); //3 log after declaration
// console.log(addTwo(4)); //Cannot access 'addTwo' before initialization because

const addTwo = function(num){ //because after declaration it store into varaible
    return num+3
}
console.log(addTwo(4)); //7