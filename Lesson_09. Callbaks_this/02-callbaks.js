// HOF
// 1. Function as pataneter
// const fn = function (a) {
//   a();
// }

// fn(pizza)

// function pizza() {
//   console.log('Pizza Callback')
// }


// // 2. Returning other function 
// const fn = function () {
//   return function () {
//     console.log('Hello')
//   }
// }


// function sum(a, b) { return a + b }
// let sum = (a, b) => a + b;
// let sub = (a, b) => a - b;
// let mult = (a, b) => a * b;
// let div = (a, b) => a / b;


// function calculator(a, b, callback) {
//   if ((b === 0) && (callback === div)) {
//     return alert('Divizion by zero')
//   }
//   return callback(a, b);
// }

// let result = calculator(10, 0, mult);
// console.log(result)


// DOM Evvent listerner
// let btn = document.querySelector('#btn-basic');
// btn.addEventListener('click', btnClickFunc);

// function btnClickFunc() {
//   console.log('Click!!!')
// }



let btn = document.querySelector('#btn-basic');
btn.addEventListener('click', function () {
  console.log('Click!!!')
});


// console.log(btn)
