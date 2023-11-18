let sum = (a, b, ...nums) => {
    let s = a + b;
    let n = 0;
    nums.forEach((num) => {
        n = n + num
    })
    console.log('sum', s + n);
}
sum(1, 2, 3, 4, 5);


let plus = (a, b, c) => console.log('plus', a + b + c);
plus(1, 2, 3);


const btnSet = document.getElementById('btn-set')
const btnGet = document.getElementById('btn-get')
const btnKeys = document.getElementById('btn-keys')
const btnHas = document.getElementById('btn-has')
const btnDelete = document.getElementById('btn-delete')
const btnClear = document.getElementById('btn-clear')
const inputKey = document.getElementById('input-key')
const inputValue = document.getElementById('input-value')

let map1 = new Map();

btnSet.addEventListener('click', () => {
    map1.set(inputKey.value, inputValue.value)
    console.log('set value Success!');
    clearInput()
})

btnGet.addEventListener('click', () => {
    let value = map1.get(inputKey.value)
    console.log(value);
    clearInput()
})

btnKeys.addEventListener('click', () => {
    let keys = map1.keys()
    console.log(keys);
    clearInput()
})

btnHas.addEventListener('click', () => {
    let hasValue = map1.has(inputKey.value)
    console.log(hasValue);
    clearInput()
})

btnDelete.addEventListener('click', () => {
    let deleteValue = map1.delete(inputKey.value)
    console.log(deleteValue);
    clearInput()
})

btnClear.addEventListener('click', () => {
    map1.clear()
    console.log('cleared Success!');
    clearInput()
})

function clearInput() {
    inputKey.value = ''
    inputValue.value = ''
}

console.log('----------------');

let numbers = [12123, 1, 3, 15, 4, 65, 31, 46]
for (i in numbers) {
    console.log(numbers[i]);
}

console.log('----------------');

for (i of numbers) {
    console.log(i);
}

console.log('----------------');

let colors = new Map();
colors.set('red', '#ff0000')
colors.set('green', '#00ff00')
colors.set('blue', '#0000ff')

for (const color of colors) {
    console.log(color);
}

console.log('----------------');

let nums5 = [1, 2, 3, 4]
nums5.push(5)
nums5.push(6)
nums5.unshift(0)

nums5.pop()
nums5.shift()
console.log(nums5);

('----------------');

let nums6 = [1, 4, 2, 3, 5, 6]
let find = nums6.find((e) => {
    return e % 2 === 0
})
console.log("find", find);

('----------------');

let nums7 = [1, 4, 2, 3, 5, 6]
let filter = nums7.filter((e) => {
    return e % 2 === 0
})
console.log("filter", filter);

('----------------');

let nums8 = [1, 2, 3]
nums8.forEach((e) => {
    console.log("forEach", e);
})