const coding = ["js","java","python","cpp"]

const  values = coding.forEach( (item) => { //foreach not return anything ((callback f() is parenthesis) => {})
    // console.log(item); //js java python cpp
    return item //undefined
})
// console.log(values); //undefined

const myNum = [1,2,3,4,5,6,7,8,,9,10]
const newNum = myNum.filter( (num) =>num>5) //filter return value
// console.log(newNum);
const newNum1 = myNum.filter( (num) =>{num>5}) // []empty arr
// console.log(newNum1);
const newNum2 = myNum.filter( (num) =>{return num>1}) //we've to write return keyword if we've written {} instead of ()
// console.log(newNum2);

const newNums = []
myNum.forEach( (num) => {
    if(num>4){
        newNums.push(num)
    }
} )
// console.log(newNums);

const books = [
    { title: 'The Silent Dawn', genre: 'fiction', publish: 1995, edition: 2001 },
    { title: 'Code Breakers', genre: 'technology', publish: 2010, edition: 2015 },
    { title: 'History of Time', genre: 'history', publish: 1988, edition: 1999 },
    { title: 'Nature Calls', genre: 'science', publish: 2002, edition: 2008 },
    { title: 'The Hidden Truth', genre: 'mystery', publish: 2005, edition: 2010 },
    { title: 'Design Thinking', genre: 'education', publish: 2013, edition: 2020 },
    { title: 'World Wars', genre: 'history', publish: 1999, edition: 2003 },
    { title: 'Future Tech', genre: 'technology', publish: 2018, edition: 2021 },
    { title: 'Deep Blue Sea', genre: 'fiction', publish: 1990, edition: 1997 },
    { title: 'Mindset Shift', genre: 'self-help', publish: 2007, edition: 2014 },
    { title: 'Modern Conflicts', genre: 'history', publish: 2005, edition: 2011 }

  ];
let userbooks = books.filter( (bk)=> bk.genre === 'history' )
userbooks = books.filter( (bk)=> { ////over-write without const
    return bk.publish>=1000 && bk.genre === "fiction" && bk.edition >= 2000}) 
    console.log(userbooks);
