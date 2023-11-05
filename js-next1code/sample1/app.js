const box = document.getElementById('test2');
const btnTouch = document.getElementById('btn-touch');

box.addEventListener('click', () => {
    console.log('click')
})

box.addEventListener('dblclick', () => {
    console.log('dblclick')
})

box.addEventListener('contextmenu', () => {
    console.log('contextmenu')
})

box.addEventListener('mousedown', () => {
    console.log('mousedown')
})

box.addEventListener('mouseup', () => {
    console.log('mouseup')
})

box.addEventListener('mousemove', () => {
    console.log('mousemove')
})

box.addEventListener('mouseenter', () => {
    console.log('mouseenter')
})

box.addEventListener('mouseleave', () => {
    console.log('mouseleave')
})

///////////////

const test3 = document.getElementById('test3');
test3.addEventListener('click', (event) => {
    console.log(event.type)
    console.log(event.target)
    console.log(event.target.nodeName)
    console.log(`event.clientX ${event.clientX}`, `event.clientY ${event.clientY}`)
    console.log(`event.offsetX ${event.offsetX}`, `event.offsetY ${event.offsetY}`)
})

///////////////

const input1 = document.getElementById('input1');
input1.addEventListener('keydown', () => {
    console.log("keydown")
})

input1.addEventListener('keypress', () => {
    console.log("keypress")
})

input1.addEventListener('keyup', () => {
    console.log("keyup")
})

///////////////

const input2 = document.getElementById('input2');
input2.style.width = "80%"
input2.style.height = "50px"
input2.style.fontSize = "32px"
input2.style.direction = "ltr"
input2.type = "text"
let inputValue;

input2.addEventListener('keypress', (event) => {
    event.preventDefault();
    console.log(input2.value)
    if (input2.value != "") {
        input2.value = input2.value + " - " + inputValue
    } else {
        input2.value = inputValue
    }
})

input2.addEventListener('keydown', (event) => {
    inputValue = event.key
    if (!(event.key >= '0' && event.key <= '9') && event.key != 'Backspace') {
        event.preventDefault();
    }
});

btnTouch.addEventListener('touchstart', (e) => {
    document.getElementById('pTouch').append(" *** touch start");
})

btnTouch.addEventListener('touchend', (e) => {
    document.getElementById('pTouch').append(" --- touch end");
})

btnTouch.addEventListener('touchmove', (e) => {
    document.getElementById('pTouch').append(" +++ touch touchmove");
})

document.getElementById('btn-event').addEventListener('click', handler)

function handler() {
    console.log('event clicked!!!')
    document.getElementById('btn-event').removeEventListener('click', handler)
}

document.querySelector('#link').addEventListener('click', (e) => {
    e.preventDefault();
})

document.querySelector('#input23').addEventListener('keydown', (e) => {
    e.preventDefault();
})

document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
})