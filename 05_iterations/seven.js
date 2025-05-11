const myNumber = [1,2,3,4,5,6,7,8,9,10]

const newnum = myNumber.map( (num) => num+10) //map returns value
// console.log(newnum);

//chaining
const newnum1 = myNumber
    .map( (num)=>num*10)
    .map( (num)=> num+1)
    .filter( (num) => num>=0)
console.log(newnum1);
