const x = 10;
const y = 20;
const z = 30;

class TestClass {
    constructor(_x, _y) {
        this.x = _x;
        this.y = _y;
    }

    getValue() {
        return `${(this.x * this.y)} - x is ${this.x} - y is ${this.y}`
    }

    get value() {
        return this.x * this.y
    }

    set value(a) {
        console.log(`set value is ${a}`)
    }
}

class TestChildClass extends TestClass {
    constructor(_x, _y, _z) {
        super(_x, _y);
        this.z = _z;
    }
}

//init class
const test1 = new TestClass(50, 100)
const test2 = new TestClass(85, 1)

//call fun in class
console.log(test1.getValue())
console.log(test2.getValue())

//get
console.log(test1.value)
console.log(test2.value)

//set
test1.value = 1
test2.value = 2

//child
const testChild1 = new TestChildClass(1, 2, 3)
console.log(testChild1.getValue())


///////////////////////////

const name = ""
class Animal {
    constructor(_name) {
        this.name = _name
    }
}
class Cat {
    eat() {
        console.log(`${this.name} eat fish`)
    }
}

class Dog extends Cat {
    eat() {
        console.log(`${this.name} eat meat`)
    }
}

new Cat("cat").eat();
new Dog("dog").eat();