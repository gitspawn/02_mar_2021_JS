/*
 * Input
 */

// _.throttle(func, [wait=0], [options={}])
// _.debounce(func, [wait=0], [options={}]


let inputRef = document.querySelector('.js-input');
let outpurRef = document.querySelector('.js-output')

// console.log(inputRef)
// console.log(outpurRef)

function inputCheck (event) {
  console.log(event.target.value)
  outpurRef.textContent = event.target.value
}

// inputRef.addEventListener('input', inputCheck)
inputRef.addEventListener('input', _.debounce(inputCheck, 2000))

// $('p').on('click', function(arguments) {
//   // body
// })