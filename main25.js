//DOM
//update html tag with js (with id, class, tag)

//get tag h1 with class name
const h1 = document.getElementsByClassName("h1-1");
console.log(h1)

//get tag h1 with id
const h2 = document.getElementById("h1-2");
console.log(h2)

//get first tag p
const p1 = document.querySelector("p");
console.log(p1)
p1.textContent = "add new text from js";

//get tag with class name root
const root = document.querySelector(".root");
console.log(root)

//get tag p with class name p-1 in tag root with class name root
const p2 = document.querySelector(".root .p-2");
console.log(p2);
p2.remove();

//get all tags p
const pAll = document.querySelectorAll("p");
console.log(pAll)