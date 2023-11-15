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
