//SC-1 for in loop for object
const myObj = {
    js: "javascript",
    cpp: "C++",
    pm: "Postman"
}
for (const key in myObj) {
    console.log(key); //Key
    console.log(myObj[key]); //Values
    console.log(`${key} fullform is ${myObj[key]} `); // key and  values
}

//SC-2 for in with array
const prog = ["js","java","python"]
for (const key in prog) {
//    console.log(`${key}`); //for in me keys aa rahi hai 
//    console.log(`value is ${prog} and key is ${key}`); //value is js,java,python and key is 1
   console.log(prog[key]);// js java python
}
//SC-3 
// Maps
const map = new Map() //Map is not iteratable
map.set('In','india')
map.set('Us','america')
map.set('fr','france')
map.set('In','india')
// console.log(map);

for (const [key, value] in map){ //For in Loop with Map isn't working
    console.log(key, ':-' ,value); 
}