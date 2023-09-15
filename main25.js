//get tag h1 with class name
const h1 = document.getElementsByClassName("h1-1");
console.log(h1)

//get tag h1 with id
const h2 = document.getElementById("h1-2");
console.log(h2)

//get first tag p
const p = document.querySelector("p");
console.log(p)

//get tag with class name root
const root = document.querySelector(".root");
console.log(root)

//get tag p with class name p-1 in tag root with class name root
const p1 = document.querySelector(".root .p-1");
console.log(p1)

//get all tags p
const pAll = document.querySelectorAll("p");
console.log(pAll)