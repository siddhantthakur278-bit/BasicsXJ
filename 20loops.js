// print 100 times;

for (let i=1;i<=100;i++){
    console.log("siddhant");
};



// calculate sum of 1 to n

let n=prompt("enter the number:")
let sum=0;
for(let i=1 ;i<=n ; i++){
    sum+=i;
};
console.log(sum);

// using while loop
let j=1;
while (j<=100){
    console.log(j);
    j++;
};

// do-while loop
let a=20;
do {
    console.log(a);
    a++;
}while (a<=100);

// for of loop

let fullName="siddhant";
for (let a of fullName){
    console.log(a);
}

// for in loop
let student={
    name:"siddhant",
    age:20,
    cgpa:9.5,
    isPass:true,

};

for (let b in student){
    console.log(b);
    console.log(student[b]);
}