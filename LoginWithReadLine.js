const readLine = require('readline')
const rl = readLine.createInterface({
    input:process.stdin,
    output:process.stdout
})  

const EventEmitter = require('events')
const myEmitter = new EventEmitter();

myEmitter.on('cal', (userName) => {
    if(userName == 'arsal'){
        rl.question('Enter Your Password\n',(password) => {
            if(password == 'javed'){
                console.log('Login Success')
            }
            else{
                console.log('Login Failed')
            }
        })
    }
    else{
        console.log('wrong username')
    }
})

myEmitter.emit('cal','arsal')
