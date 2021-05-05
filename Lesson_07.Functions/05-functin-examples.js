// Arr iteration

/*
let fruits = ['apple', 'pear', 'banana', 'kiwi'];
let numbers = [10, 20, 30, 40, 50];
let users = ['Vova', 'Sara', 'Bob', 'Mike'];
// let fLen = fruits.length;

// for (let i = 0; i < fLen; i++) {
//   console.log(fruits[i])
// }

// for (let fruit of fruits) {
//   console.log(fruit)
// }


let logItems = function (itemsArr) {
  for (let item of itemsArr) {
    console.log(item)
  }
}
logItems(fruits)
logItems(numbers)
logItems(users)
*/

// ========================================================
// Find in arr
// let users = ['Vova', 'Sara', 'Bob', 'Mike'];

// function findUser(allUsers, name) {
//   // console.log('allUsers', allUsers);
//   // console.log('name', name);
//   for (let user of allUsers) {
//     if (user === name) {
//       return 'Нашли друга!'
//     }
//   }
//   return ('Не нашли!')
// }

// // console.log(findUser(users, 'Bob'));
// let user = findUser(users, 'Mike');
// console.log(user)


// let users = ['Vova', 'Sara', 'Bob', 'Mike'];
// let findFriend = function (allFriendsArr, name) {
//   let isFriend = allFriendsArr.includes(name)
//   // return isFriend
//   return isFriend
//     ? 'Нашли друга!'
//     : 'Не нашли!'

// }
// let user = findFriend(users, 'Sara')
// console.log(user)



let numbers = [10, 20, 2, 30, 40, 50];

function findSmallestNumber(items) {
  let smallestNumber = items[0];

  for (let i = 0; i < items.length; i += 1) {
    // console.log(items[i])
    if (items[i] < smallestNumber) {
      smallestNumber = items[i]
    }
  }

  return smallestNumber
}

let num = findSmallestNumber(numbers)
console.log(num)