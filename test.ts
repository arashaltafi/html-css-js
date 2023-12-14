let num1: Number = 12
let num2: Number = 11

const firstName: string = 'arash'
const lastName: string = 'altafi'

const arrayNumber = [1, 2, 3, 4, 5]
const arrayString = ['a', 'b', 'c']
const arrayMixed = [1, 'a', true]

const person = {
    fName: 'arash',
    lName: 'altafi',
    age: 25,
    isMale: true
}

let mixed: (string | number) = 'arash'
mixed = 26

let object: {
    fName: string,
    lName: string,
    age: number,
    isMale: boolean
}
object = {
    fName: 'arash',
    lName: 'altafi',
    age: 25,
    isMale: true
}

let anySample: any;
anySample = 26;
anySample = 'arash'
anySample = true

let user: {
    fName: string,
    lName: string
}
user = {
    fName: 'arash',
    lName: 'altafi'
}

let sampleFunction: Function;
sampleFunction = () => {
    console.log('test function');
}

let sampleFunction2 = (name: string, age: number) => {
    console.log('hello ', name, age);
}
sampleFunction2('arash', 25)

const add = (num1: number, num2: number): number => {
    return num1 + num2
}
add(12, 11);

const add2 = (num1: number, num2: number, num3?: number): number => num1 + num2 + (num3 || 0)
add2(12, 11);

const add3 = (num1: number, num2: number, num3: number = 0): number => num1 + num2 + num3
add3(12, 11);