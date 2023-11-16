const image1 = document.querySelector("#img-1")
const image2 = document.querySelector("#img-2")
const image3 = document.querySelector("#img-3")
const image4 = document.querySelector("#img-4")
const image5 = document.querySelector("#img-5")

new simpleParallax(image1, {
    orientation: 'right',
    overflow: true,
    scale: 1.5,
    delay: .6,
	transition: 'cubic-bezier(0,0,0,1)'
});

new simpleParallax(image2, {
    orientation: 'left',
    overflow: true,
    scale: 1.5,
    delay: .6,
	transition: 'cubic-bezier(0,0,0,1)'
});

new simpleParallax(image3, {
    orientation: 'up',
    overflow: true,
    scale: 1.5,
    delay: .6,
	transition: 'cubic-bezier(0,0,0,1)'
});

new simpleParallax(image4, {
    orientation: 'down',
    overflow: true,
    scale: 1.5,
    delay: .6,
	transition: 'cubic-bezier(0,0,0,1)'
});

new simpleParallax(image5, {
    overflow: true,
    scale: 1.5,
    delay: .6,
	transition: 'cubic-bezier(0,0,0,1)',
    maxTransition: 60
});