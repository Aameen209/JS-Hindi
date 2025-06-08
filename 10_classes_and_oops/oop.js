const user = {
    username : "Aameen",
    height : 6,
    Genius: true,
    getuserDetails: function() {
        // console.log("Get details");
        // console.log(`username : ${this.username}`);
        // console.log(this);
        
        
    }
}
// console.log(user.username);
// console.log(user.getuserDetails());
// console.log(this); //{}

function User(username, loginCount, isLoggedIn){
this.username = username;
this.loginCount = loginCount;
this.isLoggedIn = isLoggedIn

this.greeting = function(){
    console.log(`Welcome ${this.username}`);
    
}
return this // we can remove this as well
}

const userOne = new User("Aameen",12, true)
const userTwo = new User("Bhai",13, false) //usertwo will overwrite userone and new keyword will not overwrite but it created  a copy and sent it to you for userone

console.log(userOne.constructor);
// console.log(userTwo);
