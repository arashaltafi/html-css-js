const sec = document.querySelector(".sec");
const min = document.querySelector(".min");
const hour = document.querySelector(".hour");
let deg = 6

setInterval(() => {
    clockHandler()
}, 1000);

function clockHandler() {
    sec.style.transform = `rotateZ(${deg}deg)`
    deg += 6;
}