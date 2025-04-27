// for
// SC-1
for (let i = 0; i < 10; i++) { // ctrl + d to select all i at once
    const element = i;
    if (element == 5){
        // console.log("it's 5 ");
        
    }
    // console.log(element);   // 0 1 2 3 4 5 6 7 8 9
}
// console.log(element); //not defined

// SC -2 
for (let i = 0; i < 10; i++) { // ctrl + d to select all i at once
    console.log(`outer loop : ${i}`);
    
    for (let j = 0; j<10; j++) {
        console.log(`Inner loop : ${j} and outer loop : ${i}`);
    }
}
// SC-3 Table from 1 to 20
for (let i = 1; i <= 20; i++) {
    // console.log(`Tabele No ${i}`);
    
    for (let j = 1; j <= 10; j++) {
        // console.log(i + '*' + j + '=' + i*j );
    }
}
// SC-4
const myarr = ["A", "B","C ","D "]
// console.log(myarr.length);

for (let index = 0; index <= myarr.length; index++) { //= gives an error undefined because 4th index of array is not there
    const element = myarr[index];
    // console.log(element);    
}

// SC-5, Break
for (let index = 0; index < 10; index++) {
    if (index ==5){
        // console.log("Detected 5");
        break;
    }
// console.log(`value of i is ${index}`);
    
}
// SC-6, continue
for (let index = 1; index < 10; index++) {
    if (index ==5){
        // console.log("Detected 5");
        continue;
    }
// console.log(`value of i is ${index}`);
    
}

