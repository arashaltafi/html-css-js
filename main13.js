//cloning object

const users = {
    name: "arash",
    age: 25
}

const users2 = {};

for (key in users) {
    users2[key] = users[key]
}

users2.age = 26

console.log("users2", users2)
console.log("users", users)