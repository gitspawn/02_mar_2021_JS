let friends = [
  { id: 1, name: 'Vova', age: 20, budget: 2400, isComplete: true },
  { id: 2, name: 'Sara', age: 25, budget: 3500, isComplete: false },
  { id: 3, name: 'Mike', age: 30, budget: 300, isComplete: true },
  { id: 4, name: 'Bob', age: 18, budget: 200, isComplete: false }
]


// Every returns true еcли каждый подпадает под условие
// let friendsBudget = friends.every((friend) => {
//   return friend.budget > 0
// })
// console.log(friendsBudget)
// let friendsAge = friends.every((friend) => {
//   return friend.age >= 18
// })
// console.log(friendsAge)

// Some returns true хоть один подпадает под условие
let friendsBudget = friends.some((friend) => {
  return friend.isComplete
  // return friend.budget == 300 && friend.isComplete
})
console.log(friendsBudget)