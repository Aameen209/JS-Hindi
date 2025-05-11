// SC-1 for each loop with array
const coding = ["js","java","python","c"]   
//normal function function name(params) {}
coding.forEach( function (item) { //call back function doesn't have name, and kyuki ye f() array ke andar chal rha hai toh yeh paramaeter apne aap value le ke aayega jisme humne item bola hai
    // console.log(item);
} ) 
//for arrow function
coding.forEach( (val)=>{
    // console.log(val);
})

function printMe(item){
    console.log(item);   
}
// coding.forEach(printMe)

coding.forEach((item, index, arr)=>{
    // console.log(item,index,arr);
    
})

const myCoding = [
    {
        prog: "java",
        ext: "j"
    },
    {
        prog: "javascript",
        ext: "js"
    }, {
        prog: "python",
        ext: "py"
    },
]
myCoding.forEach((test)=>{
    console.log(test.ext);
    
})