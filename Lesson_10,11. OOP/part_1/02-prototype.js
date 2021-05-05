// Прототипы

// let a = [1, 2, 3, 4]
// let b = ['vova', 'sara']
// console.log(a)
// console.log(b)

// let objA = {
//   x: 1,
//   y: 2
// }


let objB = {
  z: 100,
  pizza: 'Big'
}

let objA = Object.create(objB)
objA.x = 1;
objA.y = 2
// objA.z = 1000
// objB.z = 200
console.log(objA)


console.log(objA.x)
console.log(objA.y)
console.log(objA.z)
console.log(objA.pizza)

__proto__
__proto__
__proto__
__proto__

// console.log(objB)