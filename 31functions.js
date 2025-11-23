// function myFunction(){
//     console.log("Welcome to Apna College!");
//     console.log("We are learning Js.");
// }

myFunction();

function myFunction(mssg){
    console.log("Welcome to Apna College!");
    console.log(mssg);
    alert(mssg);
}
let m=prompt("enter the message you want to display");
myFunction(m);


// function --> 2 number, sum
function sum(a,b){
    // a and b are local variables
    return Number(a)+Number(b);
}
let x=prompt("enter number1:");
let y=prompt("enter number2:");
a=sum(x,y);
alert(`the expected sum is ${a}`);
console.log(a);


