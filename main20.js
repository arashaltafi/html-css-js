const names = ["aaa", "bbb", "ccc", "ddd", "eee"];

//for
for (index of names) {
    console.log(index)
}


console.log("/////////////////////////")



//foreach
names.forEach(element => {
    console.log(element)
});


console.log("/////////////////////////")



//filter
const numbers = [12, 12, 3, 132, 4, 324, 45, 234, , 4312, 3, 124];
const filter = numbers.filter(number => {
    return number > 15;
})
console.log("filter", filter)



//filter with foreach for objects
const users = [
    { name: "Arash", isActive: true, age: 25 },
    { name: "hhh", isActive: false, age: 42 },
    { name: "fff", isActive: false, age: 16 },
    { name: "ttt", isActive: true, age: 63 },
    { name: "nnn", isActive: false, age: 50 },
]
const activedUser = users.filter(name => {
    return name.isActive
})
activedUser.forEach(element => {
    console.log(element.name)
});



console.log("/////////////////////////")


//map
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const map = numbers2.map(e => {
    return e * 2
})
console.log("map", map)




console.log("/////////////////////////")


//reduce
const total = numbers2.reduce((acc, curr) => {
    return (acc + curr)
}, 0)
console.log("reduce total", total)


const cartItem = [
    {id: 1, item: "iphone 15", price: 1000, count: 5},
    {id: 2, item: "tv", price: 6000, count: 1},
    {id: 3, item: "apple watch", price: 4000, count: 3},
    {id: 4, item: "mac", price: 2000, count: 2},
]
const totalPrice = cartItem.reduce((acc, curr) => {
    return (acc + curr.price * curr.count)
}, 0)
console.log("reduce totalPrice", totalPrice)
