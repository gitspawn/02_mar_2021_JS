// Inharitance
// class Parent { }
// class Dog { }

// // Inharitance
// class Child extends Parent { }

// let ch = new Child()
// console.log(ch)

class User {
  constructor(firstName, lastName) {
    this.firstName = firstName,
      this.lastName = lastName
  }
  getFullName() {
    return `${this.firstName}, ${this.lastName}`
  }
  sayHello() {
    return `Hello ${this.firstname}, ${this.lastName}`
  }
}
let vova = new User('Vova', 'Smith')
// console.log(vova)


class Customer extends User {
  constructor(firstName, lastName, membership) {
    super(firstName, lastName)
    this.membership = membership
  }

  // getFullName() {
  //   let paretngetFullName = super.getFullName()
  //   return paretngetFullName
  // }



  getFullName() {
    return `Hello world`
  }
  // sayHello() {
  //   return `Hello ${this.firstname}, ${this.lastName}`
  // }


  getAllData() {
    return `${this.firstName}, ${this.lastName}, ${this.membership}`
  }

}

let mike = new Customer('Mike', 'Erikson', 'Basic');
console.log(mike.firstName)
console.log(mike.membership)
console.log(mike.getFullName())


class Admin extends Customer {

}