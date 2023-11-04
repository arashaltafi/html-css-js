const box = document.getElementById('test2');

box.addEventListener('click',  () => {
    console.log('click')
})

box.addEventListener('dblclick',  () => {
    console.log('dblclick')
})

box.addEventListener('contextmenu',  () => {
    console.log('contextmenu')
})

box.addEventListener('mousedown',  () => {
    console.log('mousedown')
})

box.addEventListener('mouseup',  () => {
    console.log('mouseup')
})

box.addEventListener('mousemove',  () => {
    console.log('mousemove')
})

box.addEventListener('mouseenter',  () => {
    console.log('mouseenter')
})

box.addEventListener('mouseleave',  () => {
    console.log('mouseleave')
})

///////////////

const test3 = document.getElementById('test3');
test3.addEventListener('click',  (event) => {
    console.log(event.type)
    console.log(event.target)
    console.log(event.target.nodeName)
    console.log(`event.clientX ${event.clientX}`, `event.clientY ${event.clientY}`)
    console.log(`event.offsetX ${event.offsetX}`, `event.offsetY ${event.offsetY}`)
})

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