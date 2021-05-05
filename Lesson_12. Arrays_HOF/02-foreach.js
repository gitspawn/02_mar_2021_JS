/*
forEach()
map()
filter()
find()
every()
some()
sort()
*/

// [].method(() => {}) 
// [].method(function () {})
// [].method( callback)
// function callback() {}

// Formula
// friends.forEach((elem, index, array) => { })

let fruits = ['pear', 'apple', 'banana', 'melom']


// fruits.forEach((elem, index, arr) => {
//   // console.log(elem)
//   // console.log(index)
//   // console.log(arr)
//   // console.log(arr[index])
//   console.log(`elem: ${elem} - index: ${index}`)
// })


// fruits.forEach((fruit, idx) => {
//   console.log(fruit.length)
// })


let friends = [
  { id: 1, name: 'Vova', age: 20, budget: 2400, isComplete: true },
  { id: 2, name: 'Sara', age: 25, budget: 3500, isComplete: false },
  { id: 3, name: 'Mike', age: 30, budget: 300, isComplete: true },
  { id: 4, name: 'Bob', age: 18, budget: 200, isComplete: false }
]

// let newArr = []
// friends.forEach((friend) => {
//   // console.log(friend)
//   // console.table(friend)
//   // console.dir(friend.age)
//   newArr.push(friend.name)
// })
// console.log(newArr)


let newArr = friends.forEach((friend) => {
  // console.log(friend)
  // console.table(friend)
  // console.dir(friend.age)
  return friend.name
})
console.log(newArr)