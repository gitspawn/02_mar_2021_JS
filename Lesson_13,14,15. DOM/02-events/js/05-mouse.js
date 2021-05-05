/**
 * mouseenter и mouseleave
 * mouseover и mouseout
 * mousemove (chatty event)
 * Mouse coordinates: https://nerdparadise.com/programming/javascriptmouseposition
 */


let boxRef = document.querySelector('.js-box');

// boxRef.addEventListener('mouseenter', (event) => {
//   // console.log(event)
//   let box = event.target
//   box.classList.add('box--active');
// })


// boxRef.addEventListener('mouseleave', (event) => {
//   let box = event.target
//   box.classList.remove('box--active');
// })


// boxRef.addEventListener('mouseover', (event) => {
//   // console.log(event)
//   let box = event.target
//   box.classList.add('box--active');
// })


// boxRef.addEventListener('mouseout', (event) => {
//   let box = event.target
//   box.classList.remove('box--active');
// })


boxRef.addEventListener('mousemove', function(event) {
  console.log(event)
})