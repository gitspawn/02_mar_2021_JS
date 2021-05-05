// ES6

class Product {
  constructor(brand, price, discount) {
    this.brand = brand,
      this.price = price,
      this.discount = discount
  }

  getPriceWithDiscount() {
    return (this.price * (100 - this.discount)) / 100
  }

  showThis() {
    console.log(this)
  }
}

// console.log(typeof Product)
// console.log(Product.prototype)

let samsung = new Product('Samsung', 400, 15);
let apple = new Product('Apple', 1200, 20)
// console.log(samsung instanceof Product)
console.log(samsung)