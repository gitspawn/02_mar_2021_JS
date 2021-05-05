// Window
// console.log(this)
// alert('Test');
// window.alert('Test');
// this.alert('Test');
// ==============================
// Finction
// function sayName() {
//   console.log(this)
// }
// sayName(this)
// this.sayName(this)
// window.sayName(this)
// ==============================
// Function in function
// function sayName() {
//   function sayHi() {
//     console.log(this)
//   }
//   sayHi()
// }
// sayName()
// ==============================
// Function constructor
// let DataBase = function (name) {
//   this.name = name
// }
// DataBase.prototype.getDB = function () {
//   console.log(this)
// }
// let db_1 = new DataBase('Bob')
// let db_2 = new DataBase('Sveta')
// db_1.getDB()
// db_2.getDB()
// ==============================
// Object literal
let vova = {
  name: 'Vova',
  getThis() {
    console.log(this.name)
  }
}
// vova.getThis()
// let sara = {
//   name: 'Sara',
//   getThis() {
//     console.log(this.name, this)
//   }
// }
// sara.getThis()
// =========================
// Selectors
// let btn = document.querySelector('button')
// btn.addEventListener('click', function () {
//   console.log(this)
// })

// btn.addEventListener('click', () => {
//   console.log(this)
// })
// btn.addEventListener('click', vova.getThis.bind(vova))
// btn.addEventListener('click', vova.getThis.bind(this))
// btn.addEventListener('click', vova.getThis)
// console.log()
// =======================
// Clases

class Hotel {
  constructor(name) {
    this.name = name;
  }
  getName() {
    console.log(this)
    // console.log(this.name)
  }
}

let hollyday = new Hotel('HolidayINN')
let california = new Hotel('California')
hollyday.getName()
california.getName()