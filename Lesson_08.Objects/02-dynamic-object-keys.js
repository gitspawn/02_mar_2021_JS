let bmw = {
  model: 'x6',
  power: 300,
  price: 60000
}

let audi = {
  model: 'a4',
  power: 200,
  price: 35000
}

// console.log(bmw.price)
// bmw.price = 75000
// console.log(bmw.price)
// console.log(audi.price)

// let bmwPrice = bmw['price']
// let audiPrice = audi['price']
// console.log(bmwPrice)
// console.log(audiPrice)


// function userInpurHandler(name, value) {
//   let obj = {
//     [name]: value
//   }
//   return obj
// }

// let passObj = userInpurHandler('vova', 1234);
// let emailObj = userInpurHandler('sara', 'sara@i.ua')
// let loginObj = userInpurHandler('Mike', 'Mike1995')

// console.log(passObj)
// console.log(emailObj)
// console.log(loginObj)


let country = ['usa', 'china', 'russia', 'india']
let vakcine = ['Moderna', 'Sinovac', 'Sputnic V', 'Covishield']

// let vac = {
//   usa: 'Moderna',
//   china: 'Sinovac'
// }



function createVacObj(arrKeys, assValues) {
  let result = {};
  for (let i = 0; i < arrKeys.length; i += 1) {
    result[arrKeys[i]] = assValues[i]
  }
  return result;
}

let vakcineData = createVacObj(country, vakcine)
console.log(vakcineData)