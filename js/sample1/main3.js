let aa = 1;

console.log(aa > 1);
console.log(aa >= 1);
console.log(aa < 1);
console.log(aa <= 1);
console.log(aa == "1");
console.log(aa === "1");
console.log(aa != 1);
console.log(aa !== "1");


let bb = 10;
var result = (bb >= 10) ? "ok" : "nok"
console.log(result)

let cc = 200;
var takhfif = (cc > 150) ? 10 : 5;
const finaltakhfif = takhfif * cc / 100;
const finalPrice = cc  - finaltakhfif;

console.log("takhfif is : " + finaltakhfif, "final is : " + finalPrice);