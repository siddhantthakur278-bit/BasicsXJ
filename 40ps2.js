const n=Number(prompt("enter the number:"))
let newarr=[];
for (i=1;i<=n;i++){
    newarr.push(i);
}
const sum=newarr.reduce((p,c)=>{
    return p+c;
});
console.log(sum);

const prod=newarr.reduce((a,b)=>{
    return a*b;

});
console.log(prod);
