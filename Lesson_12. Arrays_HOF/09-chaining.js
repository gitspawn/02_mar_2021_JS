
// result = fruits.sort().reverse().push()
//let a = result.reverse()


let friends = [
  { id: 1, name: 'Vova', age: 20, budget: 2400, isComplete: true },
  { id: 2, name: 'Sara', age: 25, budget: 3500, isComplete: false },
  { id: 3, name: 'Mike', age: 30, budget: 300, isComplete: true },
  { id: 4, name: 'Bob', age: 18, budget: 200, isComplete: false }
]


// let str = 'abcdefg';
// function reverse(str) {
//   return str.split('').reverse().join('')
// }
// console.log(reverse(str))

let arrChaining = friends
  .filter((friend) => {
    return friend.budget > 1500
  }).map((friend) => {
    return {
      info: `Name: ${friend.name}, age: ${friend.age}`,
      budget: friend.budget
    }
  }).reduce((totalBudget, friend) => {
    return totalBudget + friend.budget
  }, 0)

console.table(arrChaining)



// Reverse string
'apple' === 'elppa'
'hello' === 'olleh'

str = 'hello world';
let revStr = function reverse(str) {
  return str.split('').reduce((rev, char) => char + rev, '');
};

console.log(revStr('apple'));