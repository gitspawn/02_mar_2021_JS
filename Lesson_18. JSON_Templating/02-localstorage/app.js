// LocalStorage
/**
  Add fo storage
  Get from storage
  Remove from storage
  Clear storage
*/

// window.localStorage()
// localStorage()
// ========================================

// Add fo storage
let user = {name: 'Vova', age: 30}
localStorage.setItem('user', JSON.stringify(user))
localStorage.setItem('apple', JSON.stringify({model: 'iphone_10', price: 1000}))

//================================
// Get from storage
let userFromLS = localStorage.getItem('user')
// console.log(userFromLS)
let parsedUser = JSON.parse(userFromLS)
// console.log(parsedUser)

// let pizzaFromLS = localStorage.getItem('pizza')
// console.log(pizzaFromLS)

// if (userFromLS) {
//   alert('Есть в локал сторадж')
// }

//=============================
// Remove from storage
// localStorage.removeItem('apple')

//==============================
// Clear storage
// localStorage.clear()

// ================================
// Cookies
// cookies.setItem()
// cookies.getItem()
// cookies.clear()

// ===========================
// Session Storage
// sessionStorage.setItem()
// sessionStorage.getItem()
// sessionStorage.removeItem()
// sessionStorage.clear()
