//Counter
const allBtns = document.querySelectorAll(".btn")
const counterValue = document.querySelector(".counter span")
const counter = document.querySelector(".counter")
let count = 0

allBtns.forEach(btn => {
    btn.addEventListener("click", (event) => {
        if (btn.classList.contains("increment")) count++
        else if (btn.classList.contains("deccrement")) count--
        else count = 0

        setTextCounter(count)
    })
})

function setTextCounter(_count) {
    if (_count <= 0) {
        count = 0
        counter.style.color = "red"
    } else {
        counter.style.color = "green"
    }

    counterValue.textContent = count
}