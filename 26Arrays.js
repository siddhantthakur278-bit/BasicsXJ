// let marks_Student1=90;
// let marks_Student2=95;
// let marks_Student3=59;
// let marks_Student4=80;

// let marks={
//     student1:97,
//     student2:98,
// };

let marks =[97,82,75,64,36];
console.log(marks);
console.log(marks.length);  //property

let heroes=["ironman","thor","hulk","shaktiman","spiderman"];
console.log(heroes);

console.log(typeof heroes);
console.log(typeof marks);

console.log(marks[0]);
console.log(marks[1]);

console.log(heroes[0]);
console.log(heroes[1]);

marks[0]=0;
console.log(marks);


// looping arrays
for (let i=0;i<marks.length;i++){
    console.log(marks[i]);
}

for (k of heroes){
    console.log(k);
}


