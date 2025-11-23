// function cVowel(str){
//     let count=0
//     for(let i=0;i<str.length;i++){
//         if (str[i]==="a" || str[i]==="e" || str[i]==="i" || str[i]=="o" || str[i]=="u"){
//             count+=1
//         }
//     }
//     console.log(count);
// }
// let mssg="numerbog khabib";
// cVowel(mssg);

function cVowel(str) {
  let count = 0;
  for (let i of str) {
    if (i === "a" || i === "e" || i === "i" || i === "o" || i == "u") {
      count += 1;
    }
  }
  console.log(count);
}
cVowel("siddhant");
