// for...in
// Object.keys
// Object.values
// Object.entries


// Array for...of

let likes = {
  good: 5,
  neutral: 30,
  bad: 2,

  // sayHello() {
  //   console.log('Hello world')
  // }
}


// Props counting
// let totalProps = 0;
// for (let key in likes) {
//   // console.log(key)
//   // console.log(likes[key])
//   totalProps += likes[key]
// }
// console.log(totalProps)

// =============================
// Object.keys
// let keys = Object.keys(likes) // arr of keys
// // console.log(keys.length)
// let total = 0;
// for (let key of keys) {
//   // console.log(key)
//   total += likes[key]
// }
// console.log(total)


// =======================
// Object.values
// let values = Object.values(likes)
// // console.log(values)

// let total = 0
// for (let value of values) {
//   // console.log(value)
//   total += value
// }
// console.log(total)

// -----------------------
// Object.entries
// let entries = Object.entries(likes);
// for (let [key, value] of entries) {
//   console.log(key, value)
// }

// console.log(entries)


// 


// Loopin though array of objects
// let users = [
//   { id: 1, name: 'Vova', age: 20 },
//   { id: 2, name: 'Sara', age: 17 },
//   { id: 3, name: 'Bob', age: 30 },
// ]

// for (let user of users) {
//   user.stats = 'guest'
//   console.log(user)
// }