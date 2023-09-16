const btnAdd = document.querySelector("#button-add");
const input = document.querySelector("#search-product");

//event click => on click listener
btnAdd.addEventListener("click", (event) => {
    console.log("click", event.target.textContent)
});


//event change => run after change input and change focus
input.addEventListener("change", (event) => {
    console.log("change", event.target.value)
});


//event input => run after change input
input.addEventListener("input", (event) => {
    console.log("input", event.target.value)
});