//property
//method
const circle = {
    radius: 10,
    location: {
        x: 2,
        y: 3
    },
    isVisible: true,
    move: function() {
        console.log("move function")
    }
}

circle.move()

//////////////////////////////////////////

//factory function
function createCircle(radius, locationX, locationY, isVisible) {
    return {
        radius,
        location: {
            x: locationX,
            y: locationY
        },
        isVisible: isVisible,
        draw() {
            console.log("Circle radius is ", radius)
        }
    }
}

createCircle(10, 2, 3, true).draw()
createCircle(25, 2, 3, true).draw()

//////////////////////////////////////////

//constructor function
function Circle2(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log("Circle radius is ", radius)
    }
}
const circle1 = new Circle2(3).draw()
const circle2 = new Circle2(5).draw()