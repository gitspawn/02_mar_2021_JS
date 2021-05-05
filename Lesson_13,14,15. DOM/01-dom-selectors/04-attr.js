{/* <a class="link__google" href="http://google.com">Google</a> */ }

// let linkRef = document.querySelectorAll('a')[0]
// console.log(linkRef)

// Set attribute
// linkRef.setAttribute('target', '_blank')
// linkRef.setAttribute('target', 'self')

// Get attribute
// let attr = linkRef.getAttribute('href')
// let attr = linkRef.getAttribute('target')
// console.log(attr)

// =============================
// Alternative way
// let linkRef = document.querySelectorAll('a')[0]
// linkRef.target = 'self'



let imgRef = document.querySelectorAll('img')[0]
console.log(imgRef)
imgRef.width = 400
imgRef.alt = 'pizza on plate'