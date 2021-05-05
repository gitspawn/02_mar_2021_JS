
// ConnonJS module
class customerClass  {
  constructor(name, age){
    this.name=name;
    this.age = age
  }

  hello = ()=>{
    console.log(this.name, this.age)
  }
}
module.exports = customerClass

//===================================

// ES6 modules
// class customerClass  {
//   constructor(name, age){
//     this.name=name;
//     this.age = age
//   }

//   hello = ()=>{
//     console.log(this.name, this.age)
//   }
// }
// export default customerClass