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

// let friendsNames = friends.map(({ name }) => name)
// console.log(friendsNames)


// let friendsNames = friends.map((friend) => {
//   return {
//     name: friend.name,
//     age: friend.age
//   }
// });

// let friendsNames = friends.map(({ name, age }) => ({
//   name,
//   age
// }))

// console.table(friendsNames)



// let filterFriends = friends.filter((friend) => {
//   return friend.isComplete
// })


// let filterFriends = friends.filter(({ isComplete }) => isComplete)
// console.table(filterFriends)




// let filterFriends = friends.filter(({ budget }) => budget > 1500 )
// console.table(filterFriends)


let filterFriends = friends.filter(({ budget, isComplete }) => budget > 1500 && isComplete)
console.table(filterFriends)
