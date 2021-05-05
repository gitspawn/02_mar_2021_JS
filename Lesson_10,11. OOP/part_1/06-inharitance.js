// let objB = {
//   z: 100,
//   pizza: 'Big'
// }

// let objA = Object.create(objB)
// objA.x = 1;
// objA.y = 2
// // objA.z = 1000
// // objB.z = 200
// console.log(objA)


function User(firstName, lastName) {
  this.firstName = firstName,
    this.lastName = lastName

  // this.getFullName = function () {
  //   return `${this.firstname}, ${this.lastName}`
  // }
}

User.prototype.getFullName = function () {
  return `${this.firstName}, ${this.lastName}`
}

User.prototype.sayHello = function () {
  return `Hello ${this.firstname}, ${this.lastName}`
}

let vova = new User('Vova', 'Smith')
let sara = new User('Sara', 'Johns')

// console.log(vova.getFullName())
// console.log(sara)

//============================
// Inharitense

function Customer(firstName, lastName, membership) {
  // this.firstName = firstName;
  // this.lastName = lastName;
  // this.membership = membership

  // User.call(this, firstName, lastName)
  User.apply(this, arguments)
  this.membership = membership
}

Customer.prototype = Object.create(User.prototype);
Customer.prototype.constructor = Customer


let mike = new Customer('Mike', 'Erikson', 'Basic');
// console.log(mike.getFullName())
// console.log(mike)

Customer.prototype.getAllData = function () {
  return `${this.firstName}, ${this.lastName}, ${this.membership}`
}

// console.log(mike.getAllData())




////////////////////////////////////////


// Functional inheritance
function Admin(status) {
  Customer.apply(this, arguments)
  this.status = status
}

// Prototype inheritance
Admin.prototype = Object.create(Customer.prototype);
// Привязка Constructor 
Admin.prototype.constructor = Admin

Admin.prototype.getFullName = function () {
  console.log('Hello world')
}


let admin = new Admin('Bob', 'Sponge', 'Advansed', 'admin')

console.log(admin)
console.log(admin.getAllData())
admin.getFullName()





// ES6 Clases
// class User {
//   constructor() { }

//   getFullname() { }

// }

// let vova = new User()
