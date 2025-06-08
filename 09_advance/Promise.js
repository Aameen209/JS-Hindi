const prmoiseOne = new Promise(function(resolve, reject){
    //Do an async task
    setTimeout(function(){
        console.log('async task done');
  resolve()      
    },2000)
})
prmoiseOne.then(function() {
    console.log("promise consumed");
})
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Asnyc");
        resolve()
    },1000)
}).then(function(){
    console.log("async resolved");
})

const Promisethree = new Promise(function(resolve, reject){
setTimeout(function(){
    resolve({usernme: "Aameen", firstName: "Mohd", LastName: "Khan"})
},1000)
})
Promisethree.then(function(user){
    console.log(user);    
})

const promisefour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if (!error){
            resolve({username:"aameen",password:"1234"})
        }
        else{
            reject('ERROR: ok')
        }
    },2000)
})
promisefour.then((user)=>{ //we can't use this const username = 
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=> console.log("promise is either resolve or reject"))
// console.log(username); this is not working


const promisefive = new Promise(function(resolve,reject){
     setTimeout(function(){
        let error = true
        if (!error){
            resolve({username:"js",password:"12345"})
        }
        else{
            reject('ERROR: js not working')
        }
    },3000)
});
async function consumePromiseFive(){
   try {
     const response = await promisefive
    console.log(response);
   } catch (error) {
    console.log(error);
    
   }   
}
consumePromiseFive();
// Approach-1
async function getAllUsers(){
try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    console.log(data);
}
 catch (error) {
  console.log(error);
    
}}
getAllUsers()
//Approach-2
fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
    return response.json()  
})
.then((data)=>{console.log(data)})
.catch((error)=> console.log(error));