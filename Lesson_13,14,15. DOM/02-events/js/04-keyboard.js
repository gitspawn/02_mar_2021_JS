/**
 * keydown, keypress, keyup
 * keypress - only for symbol buttons (doesn't work for - ctrl, shift, alt and so on)
 * keydown - all buttons: symbol buttons, ctrl, shift, alt and so on
 * event.key
 * event.code
 * https://keycode.info/
 */


// window.addEventListener('keypress', (event) => {
//   // console.log(event)
//   // console.log('event.keyCode', event.keyCode)
//   // console.log('event.key', event.key)
//   console.log('event.code', event.code)

// })


// window.addEventListener('keydown', (event) => {
//   console.log('event.code', event.code)
// })
// window.addEventListener('keydown', onEscape)

// function onEscape(event) {
//   if(event.code ==='Escape'){
//     console.log('Нажали Esc')
//   }
// }

let outputRef = document.querySelector('.js-output');
let clearBtnRef = document.querySelector('.js-clear')

window.addEventListener('keydown', onKeyboard)

function onKeyboard(event){
  outputRef.textContent += event.key
}

clearBtnRef.addEventListener('click', () =>{
  outputRef.textContent = ''
  window.removeEventListener('keydown', onKeyboard)
})