function multiplyby5(num){
    return num*5
}
multiplyby5.power = 2

console.log(multiplyby5(5)); //25
console.log(multiplyby5.power); //2
console.log(multiplyby5.prototype); //{}

function createUser(username, score){
    this.username= username
    this.score = score
}
createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`Score is ${this.score}`);    
}
const chai = new createUser("Chai",10)
const Tea = new createUser("Tea", 20)

chai.printMe()
