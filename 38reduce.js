const arr1=[1,2,3,4];
const initial=0;
const sum=arr1.reduce(
    (prev,curr)=>prev+curr //prev=1 ,val=2 initially then prev =prev+val
);

console.log(sum);


let arr=[5,1,2,6,3];

const output=arr.reduce((p,c)=>{
    return p>c? p : c;
});

console.log(output);