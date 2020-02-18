Node Modules
is mai ham alag js file bna k kam karte hai means k sara kam aik hi file me karenge to bhot massy code hojae ga islea ham alag file bna k kam karte hai 
-----
code2.js
-----
const sum = (num1, num2) => {
    return num1 + num2
}

const PI = 3.14

class someMathObject{
    constructor(){
        console.log('Object Created')
    }
}

// module.exports.sum = sum
// module.exports.PI = PI
// module.exports.someMathObject = someMathObject

// ya is kam ko is tarah bhi karsakte hai 

module.exports = {
    sum:sum,
    PI:PI,
    someMathObject:someMathObject
}
-------
code1.js
-------
const code2 = require('./code2')

console.log(code2.sum(1,1))
console.log(code2.PI)
console.log(new code2.someMathObject)
------------------
agar aik hi method hai to poori file ko aik hi method se bind kardenge
---
mosh2.js
--
function sum(num1, num2){
    return num1 + num2;
}

module.exports = sum
----
mosh1.js
----
const file = require('./mosh2')

console.log(file(1,1))
===============================
NodeJs should not be use for CPU instensive application
NodeJs should be use for Data or Network Intensive Application
===============================
difference between setTimeout() and setInterval();

setTimeout me ye seen hai k aik time limit set kardete hai or us time k bad wo code chal jata hai wo code sirf aik bar chalta hai and isko clear karne k lea clearTimeout() use karte hai 

jabke setInterval() me aik time limit set karte hai or code har us time k bad repeatidy chalta rehta hai iske rokne k lea clearInterval() karte hai 

//Interval
function SayHello(name){
    setInterval(() => {
        console.log("Hello " + name)
    },1000)
    
}

// SayHello("Javed");

// Timeout
function SayHello(name){
    setTimeout(() => {
        console.log(name)
    }, 1000)
}

SayHello("Javed")
===================================
window aik global varial hai 
window.console.log()
window.setInterval()
etc
hame window lgane ki zarorat nahi hoti 
just 
console.log();
setInterval();
etc
***NodeJs me window nahi hota to ye work nahi kare ga nodeJs me coreJS me work kare ga
NodeJs me global hota hai
----
variable and functions define here is not act global here
===================================
file ki path directry ki information wagera chaye to path ki library use karenge

var path = require('path')

var pathObj = path.parse(__filename)

console.log(pathObj)
==========================
operating system ki memory k bare me details chaye to os ki library use hogi 
const os = require('os')

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log('Total Memory ' + ((totalMemory/1000)/1000)/25)
console.log(`Free memory ${((freeMemory/1000)/1000)/25}`)
=====================
current directory me kia kia para hua hai ye dekhne k lea ham file system ki library use karte hai 


const fs = require('fs')
//Syncronias

var files = fs.readdirSync('./')
console.log(files)

//ASyncronias

fs.readdir('./',function(err, files){
    if(err) console.log('Error ',err);
    else console.log(files)
})
==================
event Emitter

*EventEmitter*
oper dekha jae to har word ka pehla character capital hai
ye indecate karta hai ye class hai
-------------
const EventEmitter = require('events')
const emitter = new EventEmitter();

//Register a listener
emitter.on('Play', function(){
    console.log('You have been played')
})

//Raise an event
emitter.emit('Play')
-----
ham event emmiter k sath argument bhi pass karsakte hai 
--

//Register a listener
emitter.on('Play', function(arg){
    console.log('You have been played', arg)
})

//Raise an event
emitter.emit('Play',{
    id:1,
    url:'https://www.google.com'
})
-------------
extending event emitter class

mosh2.js
--------
const EventEmitter = require('events')

class Logger extends EventEmitter{

    log(message){
        console.log(message)

        this.emit('eventLog',{
            id:1,
            url:'https://www.google.com'
        })
    }
}

module.exports = Logger
-----------
mosh1.js
------
const Logger = require('./mosh2.js')

const logger = new Logger();

logger.on('eventLog', function(arg){
    console.log(arg)
})

logger.log('Hello')
---
========================================
API work
-------
const https = require('http')

const server = https.createServer((req, res) => {
    if(req.url === '/'){
        res.write('Hello world');
        res.end();
    }
    if(req.url === "/api/city"){
        res.write(JSON.stringify([
            {
                id:'1',
                name:'Karachi'
            },
            {
                id:'2',
                name:'Lahore'
            }
        ]))
        res.end();
    }
});

server.listen(2000)

server.on('connection',(socket) => {
    console.log('Server is connected')
})

console.log('Server is listening')
