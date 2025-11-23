let fullName="tony stark";

const age=24;

// var totalPrice=99.99; 
// it was used earlier but not now
// because var can be redeclared.

// age=59;

// age=88;

console.log(age)

fullName="siddhant";

console.log(fullName);

let a;

console.log(a);
// the above prints undefined
a=35;
console.log(a);

// const j;
// console.log(j);
// the above prints error


{
    let s=5;
    // let s=9;
    // the above provides error as s cannot be redefined in the same block.
    console.log(s);
}


{
    let s=9;
    console.log(s);
}
