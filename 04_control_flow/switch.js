// switch (key) { //key woh value jo har baar check karni hai
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = "march" //For number let'3 say 3
switch (month) { //[Shift + Alt + Downarrow]
    case "Jan":
        console.log("January");
        break;
    case "Feb":
        console.log("feb");
        break;
    case "march": // 3, So it will print march
        console.log("Mar");
        break; //If not using break then it will print case 4 as well
    case "apr":
        console.log("april");
        break; // If there is no break statement added before the default case, default will also be executed
    default:
        console.log("Default");
        break;
}