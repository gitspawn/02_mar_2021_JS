// Objects {}

// Variables
let name = 'Vova';
let age = 30;
function sayHello() {
  console.log('Hello world')
}


// Properties - Свойства обьекта
// let user = {
//   name: 'Vova',
//   age: 30,

//   sayHello() {
//     // Method
//     console.log('Hello world')
//   }
//   // // ES5
//   // sayHello: function () {
//   //   console.log('Hello world')
//   // }
// }

// console.log(typeof user)

let person = {
  firstName: 'Sara',
  lastName: 'Smith',
  age: 17,
  email: 'sara@i.ua',
  hobbies: ['music', 'insta bloger', 'tv-shows'],
  adress: {
    zip: 12345,
    city: 'Kyiv',
    street: 'Elm Street',
    house: 1428
  },

  getBirthday() {
    return 2021 - this.age;
  },

  greet() {
    console.log(`Hello ${this.firstName}`)
  }
}
// === Read props
// 99%
// let res = person.firstName
// res = person.email
// // res = person.greet()
// // person.greet()
// res = person.getBirthday()
// console.log(res)

// ==== Update props
// 99%
person.firstName = 'Vova';
person.hobbies = ['footbal', 'box', 'beer']

// 99%
// Add prop
person.car = {
  manufacturer: 'BMW',
  model: 'x5'
}
person.status = 'Admin'


// delete prop
delete person.lastName
delete person.age

console.log(person)


/*

C - create
R - read
U - update
D - delete

*/