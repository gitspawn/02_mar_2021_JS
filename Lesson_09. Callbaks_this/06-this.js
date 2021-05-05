// this - Контекст вызова
// Не важно где обьявлена ф-ция, важно кто ее вызывает!!!

// Object literal
// let vova = {
//   name: 'Vova',
//   // showThis: function () {}
//   showThis() {
//     console.log(this);
//   }
// }

// let sara = {
//   name: 'Sara',
//   showThis() {
//     console.log(this);
//   }
// }

// vova.showThis()
// sara.showThis()
//==================================

// Global obect
// window.alert('Hello')

// function showThis() {
//   console.log(this)
// }
// showThis();
// console.log(window)


// function showThis(a, b) {
//   console.log('showThis', this);

//   function sum() {
//     console.log('sum', this)
//     return a + b;
//   }
//   console.log(sum())
// }

// showThis(10, 5)
// this.showThis(10, 5)
// window.showThis(10, 5)

// =====================

// function User(name, email) {
//   this.name = name;
//   this.email = email;

//   this.sayHello = function () {
//     console.log(`Hello ${this.name} ${this.email}`)
//   }
// }

// let bob = new User('Bob', 'bob@i.ua')
// let mike = new User('Mike', 'mike@gmail.com')

// console.log(bob.name)
// console.log(mike.name)

// console.log(bob);
// console.log(mike)
// ======================================

// Event listeners

// let btn = document.querySelector('#btn-basic')
// btn.addEventListener('click', function () {
//   console.log(this)
// })

// btn.addEventListener('click', () => {
//   console.log(this)
// })

// ==========================================
// CALL, APPLY, BIND

// let min = Math.min(2, 20)
// let min = Math.min([2, 20])


// method.call(context, data) - simple data
// method.apply(context, data) - data as array
// method.bind(context, data) - data and return function

// let min = Math.min.apply(Math, [2, 20])
// let min = Math.min.bind(Math, 2, 20)

// console.log(min())


// let vova = {
//   name: 'Vova',
//   // showThis: function () {}
//   showThis() {
//     // console.log(this);
//     console.log(this.name);
//   }
// }

// let sara = {
//   name: 'Sara',
//   showThis() {
//     console.log(this);
//   }
// }
// sara.showThis()

// btn.addEventListener('click', sara.showThis.bind(sara))
// btn.addEventListener('click', vova.showThis.bind(vova))
// btn.addEventListener('click', vova.showThis.bind(this))

// ===================================
let vova = {
  name: 'Vova',
  showName() {
    console.log(this.name);
  }

}

let sara = {
  name: 'Sara',
}

// vova.showName()

// let name = vova.showName.bind(sara)()
// let nameData = vova.showName.bind(sara)
let nameData = vova.showName.call(sara)
console.log(nameData)