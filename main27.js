const btnAdd = document.querySelector("#button-add");
const input = document.querySelector("#search-product");
const body = document.querySelector("body");
const productRoot = document.querySelector("#product-root")

const products = [
    { title: "React.js is a JavaScript library developed by Facebook for building user interfaces, particularly single-page applications where UI components update dynamically." },
    { title: "Node.js is a JavaScript runtime environment that allows developers to run JavaScript on the server-side, enabling the development of powerful, scalable, and networked applications." },
    { title: "Next.js is a framework built on top of React.js that enables server-side rendering and provides a seamless developer experience for building modern web applications." },
    { title: "TypeScript is a superset of JavaScript that adds static typing to the language, making it more robust and maintainable for larger-scale projects." },
    { title: "JavaScript is a versatile and widely-used programming language for creating dynamic and interactive web applications." }
]

renderProduct(products, "")

//event click => on click listener
btnAdd.addEventListener("click", (event) => {
    console.log("click", event.target.textContent)
    renderProduct(products, input.value)
});


//event change => run after change input and change focus
input.addEventListener("change", (event) => {
    console.log("change", event.target.value)
    renderProduct(products, event.target.value)
});


//event input => run after change input
input.addEventListener("input", (event) => {
    console.log("input", event.target.value)
    renderProduct(products, event.target.value)
});

function renderProduct(p, f) {
    const filterdProducts = p.filter(element => {
        return element.title.toLowerCase().includes(f.toLowerCase())
    });

    //empty div root
    productRoot.innerHTML = ""

    filterdProducts.forEach(items => {
        const h3 = document.createElement("h4")
        h3.textContent = items.title
        // h3.innerText = items.title
        productRoot.appendChild(h3)

        const hr = document.createElement("hr")
        productRoot.appendChild(hr)
    });
}