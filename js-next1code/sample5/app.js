const html = document.documentElement;
const body = document.body;

const reset = document.querySelector("#reset");
const input = document.querySelector("#input");
input.focus();

//chars
const btnAll = document.querySelectorAll(".btn");
const btnA = document.querySelector("#btn-a");
const btnB = document.querySelector("#btn-b");
const btnC = document.querySelector("#btn-c");
const btnD = document.querySelector("#btn-d");
const btnE = document.querySelector("#btn-e");
const btnF = document.querySelector("#btn-f");
const btnG = document.querySelector("#btn-g");
const btnH = document.querySelector("#btn-h");
const btnI = document.querySelector("#btn-i");
const btnJ = document.querySelector("#btn-j");
const btnK = document.querySelector("#btn-k");
const btnL = document.querySelector("#btn-l");
const btnM = document.querySelector("#btn-m");
const btnN = document.querySelector("#btn-n");
const btnO = document.querySelector("#btn-o");
const btnP = document.querySelector("#btn-p");
const btnQ = document.querySelector("#btn-q");
const btnR = document.querySelector("#btn-r");
const btnS = document.querySelector("#btn-s");
const btnT = document.querySelector("#btn-t");
const btnU = document.querySelector("#btn-u");
const btnV = document.querySelector("#btn-v");
const btnW = document.querySelector("#btn-w");
const btnX = document.querySelector("#btn-x");
const btnY = document.querySelector("#btn-y");
const btnZ = document.querySelector("#btn-z");

let inputValue;

reset.addEventListener('click', () => {
    input.value = ""
    input.focus();
})

body.addEventListener('keydown', (e) => {
    console.log(e)
    switch (e.code) {
        case "KeyA": {
            btnA.classList.add('btn-active')
            break;
        }
        case "KeyB": {
            btnB.classList.add('btn-active')
            break;
        }
        case "KeyC": {
            btnC.classList.add('btn-active')
            break;
        }
        case "KeyD": {
            btnD.classList.add('btn-active')
            break;
        }
        case "KeyE": {
            btnE.classList.add('btn-active')
            break;
        }
        case "KeyF": {
            btnF.classList.add('btn-active')
            break;
        }
        case "KeyG": {
            btnG.classList.add('btn-active')
            break;
        }
        case "KeyH": {
            btnH.classList.add('btn-active')
            break;
        }
        case "KeyI": {
            btnI.classList.add('btn-active')
            break;
        }
        case "KeyJ": {
            btnJ.classList.add('btn-active')
            break;
        }
        case "KeyK": {
            btnK.classList.add('btn-active')
            break;
        }
        case "KeyL": {
            btnL.classList.add('btn-active')
            break;
        }
        case "KeyM": {
            btnM.classList.add('btn-active')
            break;
        }
        case "KeyN": {
            btnN.classList.add('btn-active')
            break;
        }
        case "KeyO": {
            btnO.classList.add('btn-active')
            break;
        }
        case "KeyP": {
            btnP.classList.add('btn-active')
            break;
        }
        case "KeyQ": {
            btnQ.classList.add('btn-active')
            break;
        }
        case "KeyR": {
            btnR.classList.add('btn-active')
            break;
        }
        case "KeyS": {
            btnS.classList.add('btn-active')
            break;
        }
        case "KeyT": {
            btnT.classList.add('btn-active')
            break;
        }
        case "KeyU": {
            btnU.classList.add('btn-active')
            break;
        }
        case "KeyV": {
            btnV.classList.add('btn-active')
            break;
        }
        case "KeyW": {
            btnW.classList.add('btn-active')
            break;
        }
        case "KeyX": {
            btnX.classList.add('btn-active')
            break;
        }
        case "KeyY": {
            btnY.classList.add('btn-active')
            break;
        }
        case "KeyZ": {
            btnZ.classList.add('btn-active')
            break;
        }
        default: {
            btnAll.forEach((btn) => {
                btn.classList.add("btn-active");
            })
            break;
        }
    }

    input.focus();

    if ((Number(e.key) == NaN) || (Number(e.key) >= 0 || Number(e.key) <= 9) || e.key == 'Backspace') {
        btnAll.forEach((btn) => {
            btn.classList.add("btn-active");
        })
    }
})

body.addEventListener('keyup', () => {
    btnAll.forEach((btn) => {
        btn.classList.remove("btn-active");
    })
})