let food=['potato','litchi','apple','tomato'];
console.log(food);
food.push('dryfruits');
console.log(food);

console.log(food.pop());
console.log(food);
console.log(food.pop());
console.log(food);
food.pop();
console.log(food);

food.push(10920);
console.log(food);
console.log(food.toString());
console.log(food);


let MCUheroes=['ironman','thor','spiderman'];
let DCheroes=['superman','batman'];
let heroes=MCUheroes.concat(DCheroes);
console.log(heroes);

console.log(heroes.shift());
console.log(heroes);

heroes.unshift("DR DOOM");
console.log(heroes);

console.log(heroes.slice(0,1));
console.log(heroes.slice(2));

heroes.splice(3,2,"captain america","krish");

console.log(heroes);

heroes.splice(3,0,"siddhant");

console.log(heroes);

heroes.splice(3,1);
console.log(heroes);