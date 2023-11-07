const tvHour = document.querySelector("#time-hour")
const tvMinute = document.querySelector("#time-minute")
const tvSecond = document.querySelector("#time-second")
const tvMilliSecond = document.querySelector("#time-millisecond")
const btnStart = document.getElementById('btn-start')
const btnStop = document.getElementById('btn-stop')
const btnReset = document.getElementById('btn-reset')
let numMilliSecond1 = 0
let numMilliSecond2 = 0
let numSecond1 = 0
let numSecond2 = 0
let numMinute1 = 0
let numMinute2 = 0
let numHour1 = 0
let numHour2 = 0
let timer;
let isTimerInitialize = false;

btnStart.addEventListener('click', () => {
    if (isTimerInitialize) {
        handlerClearTimer()
        isTimerInitialize = false
    } else {
        timer = setInterval(() => {
            handleTimer()
        }, 10);
        isTimerInitialize = true
    }
})

btnStop.addEventListener('click', () => {
    clearTimeout(timer)
    isTimerInitialize = false
})

btnReset.addEventListener('click', () => {
    handlerClearTimer()
})

function handleTimer() {
    numMilliSecond1++
    if (numMilliSecond1 > 9) {
        numMilliSecond1 = 0
        numMilliSecond2++
    }
    else if (numMilliSecond2 > 9) {
        numMilliSecond2 = 0
        numSecond1++
    }
    else if (numSecond1 > 9) {
        numSecond1 = 0
        numSecond2++
    } else if (numSecond2 > 5) {
        numSecond2 = 0
        numMinute1++
    } else if (numMinute1 > 9) {
        numMinute1 = 0
        numMinute2++
    } else if (numMinute2 > 5) {
        numMinute2 = 0
        numHour1++
    } else if (numHour1 > 9) {
        numHour1 = 0
        numHour2++
    } else if (numHour2 > 1 && numHour1 > 3) {
        numMilliSecond1 = 0
        numMilliSecond2 = 0
        numSecond1 = 0
        numSecond2 = 0
        numMinute1 = 0
        numMinute2 = 0
        numHour1 = 0
        numHour2 = 0
        alert("One Day")
    }
    tvMilliSecond.innerHTML = `${numMilliSecond2}${numMilliSecond1}`
    tvSecond.innerHTML = `${numSecond2}${numSecond1}`
    tvMinute.innerHTML = `${numMinute2}${numMinute1}`
    tvHour.innerHTML = `${numHour2}${numHour1}`
}

function handlerClearTimer() {
    isTimerInitialize = false
    clearTimeout(timer)
    tvHour.innerHTML = '00'
    tvMinute.innerHTML = '00'
    tvSecond.innerHTML = '00'
    tvMilliSecond.innerHTML = '00'
    numMilliSecond1 = 0
    numMilliSecond2 = 0
    numSecond1 = 0
    numSecond2 = 0
    numMinute1 = 0
    numMinute2 = 0
    numHour1 = 0
    numHour2 = 0
}