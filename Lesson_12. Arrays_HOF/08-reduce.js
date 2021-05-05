


// Formula
// [].reduce(callback, accumulator)
// accumulator - число
// accumulator - строка
// accumulator - []
// accumulator - {}
// accumulator - true



// friends.forEach((elem, index, array) => { })
// friends.reduce((acc, elem, index, arr) => { }, acc)

// const numbers = [10, 20, 30, 40, 50];
// let totalSum = numbers.reduce((acc, elem, index, arr) => {
//   // console.log(`${acc}: ${index}`)
//   console.log(`${acc}: ${elem}`)
//   return acc + elem
// }, 1000)
// console.log(totalSum)


let friends = [
  { id: 1, name: 'Vova', age: 20, budget: 2400, isComplete: true },
  { id: 2, name: 'Sara', age: 25, budget: 3500, isComplete: false },
  { id: 3, name: 'Mike', age: 30, budget: 300, isComplete: true },
  { id: 4, name: 'Bob', age: 18, budget: 200, isComplete: false }
]
// 6400
// let friendsBudget = friends.reduce((total, friend) => {
//   return total + friend.budget
// }, 0)
// console.log(friendsBudget)



// Cart total price
let cart = [
  { id: 1, title: 'Samsung', price: 220, qty: 3 },
  { id: 2, title: 'Apple', price: 1200, qty: 1 },
  { id: 3, title: 'LG', price: 300, qty: 4 },
]
// // 600 + 1200 + 1200 = 3000

// let cartSum = cart.reduce((total, item) => {
//   return total + item.price * item.qty
// }, 0)

// console.log(cartSum)


// All Titles
let cartTitles = cart.reduce((title, cartItem) => {
  title.push(cartItem.title)
  return title
}, []);

console.log(cartTitles)


