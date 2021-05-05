// let a = '13412312'


function greet(name, age = 20, statusOnSite = 'guest', orders = 0) {
  console.log(`Hello ${name} you are ${age} old, status ${statusOnSite} orders ${orders}`);
}

let arr = [1, 2, 3];

greet("Vova", 40, 'admin', 15)
// greet('Sara', 17)