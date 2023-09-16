//Counter

const incrementBtn = document.querySelector(".increment")
const deccrementBtn = document.querySelector(".deccrement")
const resetBtn = document.querySelector(".reset")
const counterValue = document.querySelector(".counter span")

let count = 0

incrementBtn.addEventListener("click", (event) => {
    count ++
    setTextCounter(count)
})

deccrementBtn.addEventListener("click", (event) => {
    count --
    setTextCounter(count)
})

resetBtn.addEventListener("click", (event) => {
    count = 0
    setTextCounter(count)
})

function setTextCounter(count) {
    counterValue.textContent = count
}