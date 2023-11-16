const circle1 = document.getElementById('div-1').childNodes[1]
const circle2 = document.getElementById('div-2').childNodes[1]
let x1 = 0
let x2 = 0

function animateCircle1() {

    let interval1 = setInterval(() => {
        x1++
        circle1.style.transform = `translate3d(${x1}px, 0, 0)`

        if (x1 > 680) {
            clearInterval(interval1)
        }
    }, 20);
}

function animateCircle2() {
    setTimeout(() => {
        x2++
        circle2.style.transform = `translate3d(${x2}px, 0, 0)`

        let rnd;
        if (x2 < 100) {
            rnd = 20
        } else if (x2 < 200) {
            rnd = 15
        } else if (x2 < 300) {
            rnd = 10
        } else if (x2 < 400) {
            rnd = 5
        } else {
            rnd = 0
        }
        
        console.log(rnd);


        if (x2 < 680) {
            setTimeout(() => {
                animateCircle2()
            }, rnd);
        }
    }, 0);
}

animateCircle1()
animateCircle2()