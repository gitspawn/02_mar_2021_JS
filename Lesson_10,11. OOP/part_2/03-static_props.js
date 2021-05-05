// Static

class Calc {
  constructor() { }
  // static get PI() {
  //   return 3.14
  // }

  static PI = 3.14

  static add(a, b) {
    return (a + b)
  }

  static mult(a, b) {
    return (a * b)
  }
}

console.log(Calc.PI)
console.log(Calc.add(10, 20))
console.log(Calc.mult(10, 20))


// Math
console.log(Math.min(10, 5))
console.log(Date.now())
