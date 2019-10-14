//ReadLine Module
const readLine = require('readline');
const rl = readLine.createInterface({input:process.stdin, 
                                     output:process.stdout})
rl.question('what is your name\n', 
    (name) => {
        console.log("Your Name is " + name)
});
