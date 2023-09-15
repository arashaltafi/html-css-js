//Functios
function add1() {
    console.log("add1")
}
add1();




const add2 = function () {
    console.log("add2")
}
add2();




const add3 = add3 => {
    return console.log("add3")
}

add3();




function add4() {
    let sum = 0
    for (nums of arguments) {
        sum += nums
        console.log(nums)
    }
    console.log(sum)
}

add4(1, 2, 3, 4, 5)




function add5(takhfif, ... args) {
    // let sum = 0
    // for (nums of args) {
    //     sum += nums
    //     console.log(nums)
    // }
    const total = args.reduce((acc, curr) => acc + curr)
    console.log(total * (1 - takhfif))
}

add5(0.1, 1, 2, 3, 4, 5)