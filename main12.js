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


const users = {
    name: "David",
    age: 25
}

console.log(Object.keys(users))
console.log(Object.values(users))
console.log(Object.entries(users))

for (key in users) {
    console.log(key, users[key])
}

/////////////

for (key of Object.keys(users)) {
    console.log(key, users[key])
}

///////////

if ("name" in users) {
    console.log("users have name")
} else {
    console.log("users have not name")
}