/*
 * Mousemove
 */


// _.throttle(func, [wait=0], [options={}])
// _.debounce(func, [wait=0], [options={}]

function checkMouseMove(event) {
  console.log(event.target)
}

let pRef = document.querySelector('.js-coords')


// window.addEventListener('mousemove', _.debounce(checkMouseMove, 200) )
pRef.addEventListener('mousemove', _.debounce(checkMouseMove, 2000) )