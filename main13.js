//cloning object

const users = {
    name: "arash",
    age: 25
}

const users2 = {};


// way 1
for (key in users) {
    users2[key] = users[key]
}

users2.age = 26

console.log("users2", users2)
console.log("users", users)

console.log("--------------------")


//way 2
const users3 = Object.assign({}, users);
users3.age = 30

console.log("users3", users3)
console.log("users2", users2)
console.log("users", users)