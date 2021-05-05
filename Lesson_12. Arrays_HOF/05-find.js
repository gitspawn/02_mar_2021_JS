let friends = [
  { id: 1, name: 'Vova', age: 20, budget: 2400, isComplete: true },
  { id: 2, name: 'Sara', age: 25, budget: 3500, isComplete: false },
  { id: 3, name: 'Mike', age: 30, budget: 300, isComplete: true },
  { id: 4, name: 'Bob', age: 18, budget: 200, isComplete: false }
]

// const numbers = [10, 20, 30, 40, 50];  // >20

// let num = numbers.find((n) => {
//   return n > 20
// })

// let num = numbers.find((n) => {
//   return n > 20
// })

// console.log(num)


// Если не находит то возвращает undefined
// console.log(typeof num)
// console.log(num === undefined)


// let findFriend = friends.find((elem) => {
//   return elem.name === 'Sveta'
// })
// console.log(findFriend)



// Оборачиваем в функцию
// function findFriend(arrayOfFriends, friendToFind) {
//   return arrayOfFriends.find((friend) => {
//     return friendToFind === friend.name
//   })
// }

// // console.log(findFriend(friends, 'Sveta'))

// if (findFriend(friends, 'Sveta')) {
//   console.log('Нашли')
// } else {
//   console.log('Не нашли')
// }
