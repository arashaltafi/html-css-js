const circle = {
    radius: 1
}

circle.color = "red"
circle.color = function draw() {}
circle.isVisible = false

delete circle.radius

console.log(circle)