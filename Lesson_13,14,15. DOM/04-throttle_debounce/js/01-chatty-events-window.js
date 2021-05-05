/*
 * Window
 */

// _.throttle(func, [wait=0], [options={}])
// _.debounce(func, [wait=0], [options={}]

function checkScroll() {
  // console.log('resize')
  console.log(window.pageYOffset)
}

function checkSize() {
  console.log(innerWidth)
}




// window.addEventListener('resize', _.throttle(checkSize, 5000))
window.addEventListener('resize', _.debounce(checkSize, 2000))