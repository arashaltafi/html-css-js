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