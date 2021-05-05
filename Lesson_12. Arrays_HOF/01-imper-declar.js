
// Imperative
let friends = ['Vova', 'Mike'];
let friendsUpdate = []

for (let i = 0; i < friends.length; i += 1) {
  friendsUpdate.push(friends[i])
}

console.log(friends === friendsUpdate)
console.log(friendsUpdate)


// Declarative
const numbers = [10, 20, 30, 40, 50];
let filtered = numbers.filter((num) => {
  return num > 20
})
console.log(filtered)