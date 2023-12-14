var num1 = 12;
var num2 = 11;
var firstName = 'arash';
var lastName = 'altafi';
var arrayNumber = [1, 2, 3, 4, 5];
var arrayString = ['a', 'b', 'c'];
var arrayMixed = [1, 'a', true];
var person = {
    fName: 'arash',
    lName: 'altafi',
    age: 25,
    isMale: true
};
var mixed = 'arash';
mixed = 26;
var object;
object = {
    fName: 'arash',
    lName: 'altafi',
    age: 25,
    isMale: true
};
var anySample;
anySample = 26;
anySample = 'arash';
anySample = true;
var user;
user = {
    fName: 'arash',
    lName: 'altafi'
};
var sampleFunction;
sampleFunction = function () {
    console.log('test function');
};
var sampleFunction2 = function (name, age) {
    console.log('hello ', name, age);
};
sampleFunction2('arash', 25);
var add = function (num1, num2) {
    return num1 + num2;
};
add(12, 11);
var add2 = function (num1, num2, num3) { return num1 + num2 + (num3 || 0); };
add2(12, 11);
var add3 = function (num1, num2, num3) {
    if (num3 === void 0) { num3 = 0; }
    return num1 + num2 + num3;
};
add3(12, 11);
