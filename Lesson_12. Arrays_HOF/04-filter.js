let friends = [
  { id: 1, name: 'Vova', age: 20, budget: 2400, isComplete: true },
  { id: 2, name: 'Sara', age: 25, budget: 3500, isComplete: false },
  { id: 3, name: 'Mike', age: 30, budget: 300, isComplete: true },
  { id: 4, name: 'Bob', age: 18, budget: 200, isComplete: false }
]


// let filterFriends = friends.filter((friend) => {
//   return friend.budget < 500
// })

// let filterFriends = friends.filter((friend) => {
//   return friend.budget === 10000
// })

let filterFriends = friends.filter((friend) => {
  // Wrong
  // return friend.isComplete === true
  // Correct
  // return friend.isComplete === true
  // Кто не заплатил
  return !friend.isComplete
})
console.table(filterFriends)


// Если filter не находит совпадений, то вернет пустой массив
// console.table(typeof filterFriends)
// console.table(Array.isArray(filterFriends))