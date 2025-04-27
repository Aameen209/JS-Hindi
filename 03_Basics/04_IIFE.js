// Immediately Invoked Function Expressions

function hello (){ //Normal Function
    console.log(`Hello Bro ${hello}`);   
}
// hello() //this show an error for next function because of semi-colon
hello("Whats Up");


(function HI (){ // Named IIFE //pure function ke upar ek () laga do    
    console.log(`HI Bro`);
})();


((name) => { //Simple IIFE with arrow function
    console.log(`OK Bro ${name}`);
})("Bye")
