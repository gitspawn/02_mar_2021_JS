// JSON

// let user = {
//   name: 'Vova',
//   age: 20,
//   status: 'isAdmin',

//   convertTostring(){
//     return `name: ${this.name}, age: ${this.age}, status: ${this.status}`
//   }
// }

// console.log(typeof user.convertTostring())


let user = {
    name: 'Vova',
    age: 20,
    status: 'isAdmin',
}
// To JSON
let userStringify = JSON.stringify(user)
console.log(typeof userStringify)
console.log( userStringify)

// From JSON

let parsedUser = JSON.parse(userStringify)
// console.log(typeof parsedUser)