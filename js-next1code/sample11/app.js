const p1 = document.getElementById('p1')
const p2 = document.getElementById('p2')
const btnStart = document.getElementById('btn-start')
const btnStop = document.getElementById('btn-stop')
let number = 0;
let timeOut;
let timeInterval;

btnStart.addEventListener('click', () => {
    timeOut = setTimeout(() => {
        timerHandler()
    }, 3000);

    timeInterval = setInterval(() => {
        timerIntervalHandler()
    }, 1000);
})

btnStop.addEventListener('click', () => {
    number = 0
    p1.innerHTML = ""
    p2.innerHTML = ""
    clearTimeout(timeOut)
    clearInterval(timeInterval)
})

function timerHandler() {
    p1.innerHTML = "test set time out after 3 second"
}

function timerIntervalHandler() {
    number++
    p2.innerHTML += `test set interval after 1 second count: ${number} <br>`
}
