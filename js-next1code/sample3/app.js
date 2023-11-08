document.body.innerHTML = `
    <div class="container">
        <p>0</p>
        <div class="buttons">
            <button id="minus">-</button>
            <button id="reset">reset</button>
            <button id="plus">+</button>
        </div>
    </div>
`;

//select elements
const counter = document.querySelector("p");
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const reset = document.querySelector("#reset");
const buttons = document.querySelector(".buttons");
const container = document.querySelector(".container");

//create element
const test = document.createElement('h2')
test.style.color = "#111";
test.style.backgroundColor = "#bbb";
test.style.padding = "20px 40px";
test.style.borderRadius = "20px 30px";
test.style.marginTop = "64px"
test.innerText = "This is Test For Create Element";
container.appendChild(test);

//body style
document.body.style.backgroundColor = "#EEE"
document.body.style.direction = "ltr";

//counter style
container.style.width = "100%"
container.style.height = "80vh"
container.style.display = "flex"
container.style.flexDirection = "column"
container.style.alignItems = "center"
container.style.justifyContent = "center"
container.style.margin = "auto"

//buttons style
buttons.style.marginTop = "32px"
buttons.style.display = "flex"
buttons.style.gap = "16px"
buttons.style.flexDirection = "row"
buttons.style.alignItems = "center"
buttons.style.justifyContent = "center"

//counter style
counter.style.width = "100%";
counter.style.fontSize = "5rem";
counter.style.fontWeight = "bold";
counter.style.textAlign = "center";
counter.style.userSelect = "none";


//plus style
plus.style.padding = "8px 22px"
plus.style.backgroundColor = "#009688"
plus.style.color = "#fff"
plus.style.fontSize = "16px"
plus.style.fontWeight = "bold"
plus.style.borderRadius = "8px"
plus.style.cursor = "pointer"

//minus style
minus.style.padding = "8px 22px"
minus.style.backgroundColor = "#F44336"
minus.style.color = "#fff"
minus.style.fontSize = "16px"
minus.style.fontWeight = "bold"
minus.style.borderRadius = "8px"
minus.style.cursor = "pointer"

//reset style
reset.style.padding = "24px 36px"
reset.style.backgroundColor = "#2196F3"
reset.style.color = "#fff"
reset.style.fontSize = "16px"
reset.style.fontWeight = "bold"
reset.style.borderRadius = "16px"
reset.style.cursor = "pointer"

//get counter value from localStorage
const counterStorage = localStorage.getItem('counter')
console.log(counterStorage)
if (counterStorage != null) {
    counter.innerHTML = counterStorage
} else {
    counter.innerHTML = "0"
}

//get counter value
let num = 0
num = Number(counter.innerHTML)

//Event Listeners
reset.addEventListener('click', () => {
    changeNum('reset')
})

minus.addEventListener('click', () => {
    changeNum('minus')
})

plus.addEventListener('click', () => {
    changeNum('plus')
})

function changeNum(state) {
    switch (state) {
        case 'minus': {
            num -= 1
            break;
        }
        case 'plus': {
            num += 1
            break;
        }
        case 'reset': {
            num = 0
            break;
        }
        default: num = 0
    }
    counter.innerHTML = num
    localStorage.setItem("counter", num)
}