const events = require('events');
const eventEmitter = new events.EventEmitter();

eventEmitter.on('scream', () => {
    console.log('scream');
})

setTimeout(() => {
    console.log("in time out")
    eventEmitter.emit('scream')
}, 1000);

console.log('in body');