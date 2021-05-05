// 1. Создать
// 2. Повесить атрибуты
// 3. Добавить текст
// 4. Привязать в дом


// Create element
let aRef = document.createElement('a');

// Add attributes
aRef.setAttribute('target', '_blank')
aRef.href = 'https://translate.google.ru/'


// Add text
aRef.textContent = 'Google'

// Add to DOM
// append
// prepend
// before
// after


// document.body.append(aRef)
// document.body.prepend(aRef)
// let ul = document.querySelectorAll('.list')[0]
//------------------------
// ul.append(aRef)
// ul.prepend(aRef)
// ul.before(aRef)
// ul.after(aRef)
//------------------------


// console.log(aRef)
// =================================
// insertAdjacentHTML
// let ul = document.querySelectorAll('.list')[0]
// ul.insertAdjacentHTML('afterbegin')
// ul.insertAdjacentHTML('afterend')
// ul.insertAdjacentHTML('beforebegin')
// ul.insertAdjacentHTML('beforeend', '<p>qweqwewqeqwe</p>')
// ul.innerHTML = '<p>qweqwewqeqwe</p>'

// =================================
// insertAdjacentHTML VS innerHTML



// =======
// Create img
//   < img
// src = "https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
// alt = "pizza"
// width = "200"
//   />

let imgRef = document.createElement('img')
imgRef.src = 'https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
imgRef.alt = 'qwe'
let ul = document.querySelectorAll('.list')[0]
ul.prepend(imgRef)

// ===================
// Remove elements
ul.remove()
