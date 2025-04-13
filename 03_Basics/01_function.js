function firstname(){
    console.log("M");
    console.log("O");
    console.log("H");
    console.log("D");
}
firstname // it will know that it's located somewhere and provide you the reference only
firstname() //M O H D   

// function addTwoNumber(num1, num2){ // when we make definition for any function call parameter, (num1, num2) Parameters
//     console.log(num1 + num2);
// }
// addTwoNumber() //NaN
// addTwoNumber(1,2) //3,  when we pass any value while calling called arguments
// addTwoNumber(3,"4") //js think that 3 is also a string output = 34
// addTwoNumber(1,"a") //1a
// addTwoNumber(3,null) //3
// const result = addTwoNumber(4,5) //we can store values as well after adding
// addTwoNumber(result, 3) //NaN

function subTwoNumber(num1, num2){ // when we make definition for any function call parameter, (num1, num2) Parameters
    // console.log(num1 - num2);
    // let result = num1 - num2
    // return result;
    // console.log("Khan"); //Unreachable code because of after return nothing works
    
    return num2-num1
}
const result = subTwoNumber(2,3)
console.log("Result : ",result);

function loginusertext(username = "sam" ){
    if(!username){ //(username === undefined) it can be used like this as well
        console.log("please enter username");
        return
    }
    return `${username} Have text`
}
// console.log(loginusertext("Hello"));
console.log(loginusertext()); //undefined have text or sam have text
console.log(loginusertext("Aameen")); //Aameen have text overwrite sam


function calculateprice (val1, val2, ...num1){ //added three dots (Rest operator) for 400, 500 and it gives an array
    return num1
}
// console.log(calculateprice(200,300,400,500)); //200 is assigned to val1 and 300 assign to val2 so print num1 is [ 400, 500 ]

//How to use object into function
// Object : 
const userone = {
        first: "Md",
        price : 99  
}
// object use in function : 
function handleobject(anyobject){
    console.log(`username is ${anyobject.first} and price is ${anyobject.price}`);
}
handleobject(userone) //username is Md and price is 99
handleobject({ //username is sam and price is 399
    first: "sam",
    price : 399
})

//for array
const mynewarr = [200,400,600,100]
function returnsecondvalue (getarray){
    return getarray[0 ]
}
console.log(returnsecondvalue(mynewarr)); //200
console.log(returnsecondvalue([1,2,3,4])); //oth index = 1

