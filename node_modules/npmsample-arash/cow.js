const cow = require('cowsay2');
const whale = require('cowsay2/cows/whale');
const usa = require('cowsay2/cows/USA');

function logWithCow(msg) {
    if (msg == null || msg == undefined || typeof(msg) != "string") msg = "Please Enter Value ..."
    console.log(
        cow.say(
            msg, {
            cow: usa
        })
    );
}

module.exports.logWithCow = logWithCow