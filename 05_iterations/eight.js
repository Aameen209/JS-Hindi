const mynum=[1,2,3]

const mytotal = mynum.reduce(function(acc,currval){
    // console.log(`acc ${acc} and currval ${currval}`);
    
    return acc + currval

},3)
// console.log(mytotal);

const newtotal = mynum.reduce( (acc,currval)=> acc + currval,0)
// console.log(newtotal);

const shoppingCart= [
    {
        itemname: "js",
        price: 499
    },
    {
        itemname: "python",
        price: 1000
    },
    {
        itemname: "java",
        price: 5000
    },
]
const addprice = shoppingCart.reduce( (acc,item) => acc + item.price, 0)
console.log(addprice);
