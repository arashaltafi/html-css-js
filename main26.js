//DOM
//click, button

const products = [
    { title: "product 1", isExist: true },
    { title: "product 2", isExist: false },
    { title: "product 3", isExist: true },
    { title: "product 4", isExist: false }
]
const existProducts = products.filter(element => element.isExist)


const btnAdd = document.querySelector("#add-product");
const btnRemove = document.querySelector("#remove-product");
const productList = document.querySelector("#product-list");
const body = document.querySelector("body");

btnAdd.addEventListener("click", (event) => {
    console.log("clicked", event.target.textContent)
    existProducts.forEach((items) => {
        const p = document.createElement("h2")
        p.textContent = items.title
    
        body.appendChild(p)
    })
});

btnRemove.addEventListener("click", (event) => {
    console.log("clicked", event.target.textContent)
    productList.remove();
});