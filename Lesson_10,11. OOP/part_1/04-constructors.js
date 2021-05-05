// ES5

// Constructors

// let vova = {
//   name: 'Vova',
//   age: 20
// }


// Function constructor
// Class

// function Product() {
//   // 1. { }
//   // 2. this links Product
//   // 3. return created object
// }

// let samsung = new Product()
// console.log(samsung instanceof Product)

// =========================================

function Product(brand, price, discount) {
  this.brand = brand,
    this.price = price,
    this.discount = discount

  this.getPriceWithDiscount = function () {
    return (this.price * (100 - this.discount)) / 100
  },

    this.showThis = function () {
      console.log(this)
    }
}

// To instatiate
let samsung = new Product('Samsung', 400, 15);
let apple = new Product('Apple', 1200, 20)
// console.log(samsung.getPriceWithDiscount())
// console.log(samsung)
// console.log(samsung instanceof Product)

// console.log(apple.getPriceWithDiscount())
// console.log(apple.brand)
// console.log(apple.price)
// console.log(apple.discount)

// console.log(samsung instanceof Product)
// console.log(apple instanceof Product)
// console.log(apple === samsung)
samsung.showThis()
apple.showThis()