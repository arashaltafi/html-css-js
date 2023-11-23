import { name, family } from "./main2.js";
import { name as fName, family as LName } from "./main2.js";
import * as utils from "./main2.js";

console.log("hello world 1 112213");

document.write("aaa 21");

console.log(name, family);
console.log(fName, LName);
console.log(utils.name, utils.family);
console.log("2 + 4 =", utils.sum(2, 4));

function test(name, family = 'altafi', age = 25) {
    console.log(`name = ${name}, family = ${family}, age = ${age}`)
}

test('arash', undefined, age = 20)