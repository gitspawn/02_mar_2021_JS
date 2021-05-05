console.log(5 ?? 10)

class User {
  static age = 20
  constructor(name){
    this._name = name;
  }

  get name(){
    return this._name
  }
}


let vova = new User('Vova')

console.log(vova.name)