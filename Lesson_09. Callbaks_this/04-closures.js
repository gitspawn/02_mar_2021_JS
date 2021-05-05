// Это механизм когда функции доступны внешние перменные


// Замыкание(англ.closure) в программировании — функция первого класса, в теле которой присутствуют ссылки на переменные, объявленные вне тела этой функции в окружающем коде и не являющиеся её параметрами.Говоря другим языком, замыкание — функция, которая ссылается на свободные переменные в своей области видимости.

// function calcFunction(n) {
//   return function () {
//     console.log(100 * n);
//   }
// }

// let calc = calcFunction(35)
// calc()


// function incrementor(n) {
//   return function (num) {
//     return n + num
//   }
// }

// let one = incrementor(1)
// let ten = incrementor(10)
// // console.log(one(10))
// console.log(ten(20))


function urlGenerator(domainName) {
  return function (url) {
    return `https://${url}.${domainName}`
  }
}

// https://www.facebook.com/
// http://unuan.net/

// let face = urlGenerator('com');
// console.log(face('facebook'))

// let un = urlGenerator('net');
// console.log(un('unian'))


function frameworkManager() {
  let frameworks = ['Angular', 'React'];

  return {
    dispaly: function () {
      console.log(frameworks)
    },

    addFramework: function (framework) {
      frameworks.push(framework)
    }
  }
}

let manager = frameworkManager();
// console.log(manager)
manager.dispaly()
manager.addFramework('Vue')
manager.dispaly()