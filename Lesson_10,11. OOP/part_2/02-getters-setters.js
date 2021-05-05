// getters / settrs

class Product {
  constructor(brand, price, discount) {
    this._brand = brand,
      this.price = price,
      this.discount = discount
  }

  get brand() {
    return this._brand
  }

  set brand(newValue) {
    this._brand = newValue
  }

  getPriceWithDiscount() {
    return (this.price * (100 - this.discount)) / 100
  }

  showThis() {
    console.log(this)
  }
}

let samsung = new Product('Samsung', 400, 15);

// console.log(samsung.brand)
// console.log(samsung.price)
// console.log(samsung.getPriceWithDiscount())


// Getters Setters
console.log(samsung.brand)
samsung.brand = 'Galaxy'
console.log(samsung.brand)