/*
  https://devdocs.io/dom_events/
  Event listeners
  Callback identity
  Event Object
*/

let mainBtn = document.querySelector('.js-target-btn');
let addListenerBtn = document.querySelector('.js-add-listener');
let removeListenerBtn = document.querySelector('.js-remove-listener');


// Add evenet listener
// mainBtn.addEventListener('click', () => {
//  console.log('Hello')
// })

// mainBtn.addEventListener('click', () => {
//   console.log('Pizza')
//  })

//  mainBtn.addEventListener('click', () => {
//   console.log('Vova')
//  })


//===============================
// Ссылочная идентичность коллбеков

// addListenerBtn.addEventListener('click', () => {
//   console.log('Повесить обработчик')
//   mainBtn.addEventListener('click', doSomeOnclick)
// })

// removeListenerBtn.addEventListener('click', () => {
//   console.log('Снять обработчик')
//   mainBtn.removeEventListener('click', doSomeOnclick)
// })

// function doSomeOnclick() {
//   console.log('Click!!!')
// }

// =================================
// Event Object
// event
// evt
// e


// mainBtn.addEventListener('click', (event) => {
// //  console.log(event)
//  console.log('event.target', event.target) // элемент на котором произошло событие
//  console.log('event.curenTarget', event.currentTarget) // элемент на котором отловили событие
// })



// mainBtn.addEventListener('click', function (event) {
// //  console.log(event.target)
//  console.log(this)
// })


// mainBtn.addEventListener('click',  (event) => {
//   //  console.log(event.target)
//    console.log(this)
//   })



mainBtn.addEventListener('click',  doSomeOnclick)

function doSomeOnclick() {
  console.log('Click!!!')
}