// CommonJs modules


// console.log(user)


// let greeter = require('./user')
// greeter('Vova')

// let somexport = require('./user')
// console.log(somexport)

// let {PI: constPi, greeter} = somexport
// let {PI, greeter} = somexport
// console.log(PI)
// console.log(constPi)

let user = require('./user')
let customerClass = require('./customerClass');
let bob = new customerClass('Bob', 30)
bob.hello()

// ===========================
// ES6 import
// import customerClass from './customerClass.js'
// let bob = new customerClass('Bob', 30)
// bob.hello()