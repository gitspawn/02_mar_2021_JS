/**
 * 
 * Change Event
 * Input Event
 *
 * Focus Event
 * Blur Event
 *

 * Checkboxes
 * Checked property
 * */


let inputRef = document.querySelector('.js-input');
let nameLabelRef = document.querySelector('.js-button > span');
let licenseRef = document.querySelector('.js-license');
let btnRef = document.querySelector('.js-button');



// =========================
// Change Event
// * Input Event
// inputRef.addEventListener("change", () => {
//   console.log('Hello from input!!!')
// })

// inputRef.addEventListener("input", (event) => {
//   // console.log(event.target.value)
//   nameLabelRef.textContent = event.target.value
// })


// ===================
// Checked property
// licenseRef.addEventListener('change', (event) => {
//   console.log(event.target.checked)
//   // btnRef.disabled = false
//   btnRef.disabled = !event.target.checked
// })


// ========================
// Focus
// Blur

// inputRef.addEventListener('focus', () => {
//   console.log('Focus event')
// })

// inputRef.addEventListener('blur', () => {
//   // alert('Enter name')
// })