function Setusername(username){
    //Complex DB calls
    this.username = username
    console.log("called");
    
}
function createuser(username, password, email){
    Setusername.call(this, username)
    this.email = email
    this.password = password
}
const code = new createuser("history","hello","test@123.com")
console.log(code);
