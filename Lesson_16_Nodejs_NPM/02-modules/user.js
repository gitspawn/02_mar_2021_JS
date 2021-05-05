let customer = require('./customer')

const PI = 3.14


let greeter = (obj) => {
  console.log(obj)
}

greeter()



module.exports = {
  PI,
  greeter
}