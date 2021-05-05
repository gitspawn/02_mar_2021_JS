

// function mult(num1, num2) {
//   console.log('Before');
//   console.log(num1 * num2);
//   console.log('After')
// }


// function mult(num1, num2) {
//   return num1 * num2;
// }

// let result = mult(20, 30)

// console.log(result)



// function mult(num1, num2) {
//   console.log(num1 * num2);
// }
// console.log(mult(3, 5))





// function redZoneDeclaration(qty) {
//   let redZotePArameter = 10000;
//   if (qty < redZotePArameter) {
//     return true
//   }
//   return false
// }

// if (redZoneDeclaration(15000)) {
//   console.log('Free to go')
// } else {
//   console.log('Hard loxdown')
// }


function getLeapYear(yaer) {
  if (yaer % 4 === 0) {
    return 'Высокостный год!';
  }
  return 'Обычный год!'
}
console.log(getLeapYear(2020))
console.log(getLeapYear(2021))
console.log(getLeapYear(1560))
