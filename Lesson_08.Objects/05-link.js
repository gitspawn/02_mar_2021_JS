// String
// Number
// Boolean
// let a = 5
// let b = 10
// a = b
// a += 1
// a += 1

// console.log('a', a)
// console.log('b', b)


// Object
let a = [1, 2, 3];
let b = a;
b.push(4);

// let c = [1, 2, 3, 4]
let c = b
c.push(5)

console.log(b)
console.log(a)
console.log(c)
// console.log('a', a)
// console.log('b', b)
// console.log('c', c)

// console.log(a === b)
// console.log(c === b)
console.log(c === a)

