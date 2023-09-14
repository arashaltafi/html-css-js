const nums = {
    value: 25
}

console.log("nums before change = ", nums)

function adds(obj) {
    obj.value++
    obj.name = "arash"
}

adds(nums)

console.log("nums after change = ", nums)
