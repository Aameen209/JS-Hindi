// Both are same 2&3
// const hellouser = new object ()
const hellouser = {}
hellouser.id = "001"
hellouser.name = "khan"
hellouser.login = true

// console.log(hellouser);
const regularuser = {
    email : "hello@yopmail.com",
    fullname: {
        username: {
            firstname : "mohd",
            midname : "aameen",
            lastname : 123
        }
    }
}
// console.log(regularuser.fullnames?.username.lastname); //? will behave like if else if fullnames is not there it move to username and fullname will be undefined
// console.log(regularuser.fullname.username.lastname); //nested object 
// console.log(regularuser);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}

const obj4 = {obj1,obj2}
// console.log(obj4); //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

// const obj4 = Object.assign(obj1, obj2); now it's storing all values into obj1
// console.log(obj5); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const obj5 = Object.assign({}, obj1, obj2); //We should give empty object to store values aur usi ko target maan lo baaki ko source
// console.log(obj5); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const obj6 = {...obj1, ...obj2, ...obj3} //we can merge value using Spread operator
// console.log(obj6); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

const users = [
    {
        id: 1,
        email: "aameen@yopmail.com"
    },
    {
        id: 2,
        email: "khan@yopmail.com"
    },
    {
        id: 3,
        email: "Pathan@yopmail.com"
    }
]

users[1].id;
console.log(hellouser); //{ id: '001', name: 'khan', login: true }, it's data type is string
console.log(Object.keys(hellouser)); //[ 'id', 'name', 'login' ], data type is array
console.log(Object.values(hellouser)); //[ '001', 'khan', true ], Now it's giving me value for hello user keys
console.log(Object.entries(hellouser)); //[ [ 'id', '001' ], [ 'name', 'khan' ], [ 'login', true ] ] ,make array for each key 
console.log(hellouser.hasOwnProperty('name')); // name is there in hello user so it's True
console.log(hellouser.hasOwnProperty('number')); // number is not there in hello user so it's False

