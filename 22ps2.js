// let a=true;
// let k=prompt("enter the winning numer:")
// while (a){
//     let n=prompt("enter the number:");
//     if (n===k){
//         console.log("you guessed the correct number!");
//         alert("you won the riddle by guessing the correct number!,check the console!");
//         a=false
//     }
// }

let gameNum=2345;
let userNum = prompt("Guess the game number:");
while(userNum!=gameNum){
    userNum=prompt("you entered the wrong number, Guess agian:");
}
alert("congratulations,you entered the right number");
