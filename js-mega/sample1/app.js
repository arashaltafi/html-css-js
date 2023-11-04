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