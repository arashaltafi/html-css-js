//max , min

function max(a, b) {
    // if (a > b) {
    //     return a;
    // } else{
    //     return b;
    // }
    return (a > b) ? a : b
}

function min(a, b) {
    // if (a < b) {
    //     return a;
    // } else{
    //     return b;
    // }
    return (a < b) ? a : b;
}

console.log("max ", max(2, 5))
console.log("min ", min(2, 5))



function checkNum(number) {
    if (typeof number != "number") return "input type is not number!!!"

    return (number % 2 == 0) ? "number is even" : "number is odd"
}

console.log("checkNum ", checkNum(11))