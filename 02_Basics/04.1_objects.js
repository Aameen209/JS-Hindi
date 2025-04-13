const course = 
{
    coursename : "Course1",
    price : 999,
    coursepage: "150",
    book: "js"
}
course.book;
const {book} = course // you
console.log(book);

const {book: b} = course // you can write book in short like b
console.log(b);



{           //JSON Format same as Object but don't have name like (course)
    name: "Aameen"
    companyL: "testforge"  
    year: 2
}