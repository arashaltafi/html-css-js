let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log("min", Math.min(...nums));
console.log("max", Math.max(...nums));

console.log(nums);
nums.forEach(e => {
  console.log(e);
})
console.log(...nums);


var d = new Date();
var h = addLeadingZero(d.getHours());
var m = addLeadingZero(d.getMinutes());
var s = addLeadingZero(d.getSeconds());

function addLeadingZero(number) {
  return (number < 10 ? "0" : "") + number;
}

console.log(`${h} : ${m} : ${s}`)


////////////


function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var randomNumber = getRandomNumber(1, 100);

console.log("random between 1, 100 = ", randomNumber);


////////////

const num1 = [1, 2, 3, 4, 5]
let num2 = []
let num3 = []

for (var i = 0; i < num1.length; i++) {
  num2[i] = num1[i]
}

//or

num3 = [...num1]

console.log("num1", num1);
console.log("num2", num2);
console.log("num3", num3);