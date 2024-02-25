const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('waterfull', () => {
  console.log('turn off water');
  setTimeout(()=>{
    console.log('Please turn off the water! its a gentle reminder');
  },3000)
});
console.log("hi");
myEmitter.emit('waterfull');
console.log('iam aayan');