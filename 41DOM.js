alert("welcome to Javascript.");
console.log("hello")
window.console.log("hello2")
// window is known as global object
console.dir(window.document)
console.dir(document.body)
console.log(document.body)
console.dir(document.head)

document.body.childNodes[1].innerText="abcd";



// DOM Manipulation---->dynamic changes in our webpage
// accessing elemts

let heading =document.getElementById("heading");
console.dir(heading)
console.log(heading)

console.log(document.getElementById("headingsss"))

let header=document.getElementsByClassName("header")
console.dir(header)
console.log(header)

console.dir(document.getElementsByClassName("headerss"))
console.log(document.getElementsByClassName("headerss"))




