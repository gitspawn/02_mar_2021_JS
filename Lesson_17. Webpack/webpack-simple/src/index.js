// import '../css/styles.css'
import "./css/base.scss";

let vova = require("./js/user");

console.log("Hello from Webpack");
console.log(vova);

class User {
  static age = 20;
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }
}

let vova2 = new User("Vova");

console.log(vova2.name);
