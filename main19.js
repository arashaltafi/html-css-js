//every  stop after one if failure
const numbers = [1, 2, -3, 4, 5];

const every = numbers.every(value => {
    console.log(value)
    return value > 0
})

console.log(every)


// some   stop after one if success
const some = numbers.some(value => {
    console.log(value)
    return value > 0
})

console.log(some)