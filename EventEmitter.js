const EventEmitter = require('events');
const myEmitter = new EventEmitter();

myEmitter.on('cal',(num1, num2) => {
  console.log(num1+num2);
})

myEmitter.emit('cal',1,2);
