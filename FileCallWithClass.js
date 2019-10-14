const sum = (num1, num2) () { num1 + num2);
const PI = 3.24;
class SomeMethObject{
  constructor(){
    console.log('object created');
  }
}

//there are two ways to export
//way 1
module.exports.sum = sum;
module.exports.PI = PI;
module.exports.SomeMathObject = SomeMathObject

//way 2
//module.exports = { sum: sum, PI : PI, SomeMathObject: SomeMathObject};


/*Now in app.js
const tutorial = require('FileCallWithClass.js');

console.log(tutorial.sum(1,1));
console.log(tutorial.PI);
console.log(new tutorial.SomeMathObject());


*/
