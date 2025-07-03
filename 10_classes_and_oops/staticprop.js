class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME is: ${this.username}`);
    }
    static createId(){ //static stops methods/property to be acceessed
        return`123`
    }
}
const khan = new User("Khan")
// console.log(khan.createId());

class Teacher extends User {
    constructor(username, email){
         super(username)
         this.email = email
    }
}
const iphone = new Teacher("iphone", "i@phone.com")
iphone.logMe()
console.log(`EMAIL is: ${iphone.email}`);