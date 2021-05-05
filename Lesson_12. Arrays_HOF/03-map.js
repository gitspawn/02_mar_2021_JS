
let friends = [
  { id: 1, name: 'Vova', age: 20, budget: 2400, isComplete: true },
  { id: 2, name: 'Sara', age: 25, budget: 3500, isComplete: false },
  { id: 3, name: 'Mike', age: 30, budget: 300, isComplete: true },
  { id: 4, name: 'Bob', age: 18, budget: 200, isComplete: false }
]



// let friendsNames = friends.map((friend) => {
//   return friend.name;
// });
// console.log(friendsNames)

// let friendsBudgets = friends.map((friend) => {
//   // return friend.budget;
//   return friend.budget + friend.budget * 0.15;
// });
// console.log(friendsBudgets)


// let friendsAge = friends.map((friend) => {
//   return friend.age * 2;
// });
// console.log(friendsAge)



// let total = 0;
// let friendsTotalBudget = friends.map((friend) => {
//   total += friend.budget
//   console.log(total)
//   return total
// });
// console.log(friendsTotalBudget)


let updateUser = 'Sara';
let updateFriends = friends.map((friend) => {
  if (updateUser === friend.name) {
    return {
      ...friend,
      budget: friend.budget + 2000,
      isComplete: friend.isComplete = true
    }
  }
  return friend
})

console.table(updateFriends)



// Spred operator
// let vova = {
//   name: 'Vova',
//   budget: 3000,
//   isAdmin: true
// }

// let sara = {
//   ...vova,
//   name: 'Sara',
//   isAdmin: false
// }

// console.log(sara)