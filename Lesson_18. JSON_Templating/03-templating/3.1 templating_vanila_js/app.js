// Vanila JS templating

// Simple tempalting
// let menu = ['Home', 'About', 'Concat US', 'Shop'];
// let cart = ['Apple', 'Samsung', 'Sony', 'LG'];


// let list = document.querySelector('.list')

// menu.forEach((li) =>{
//   list.innerHTML += `<li class="li_item">${li}</li>`
// })

// cart.forEach((li) =>{
//   list.innerHTML += `<li class="li_item">${li}</li>`
// })


//=========================
// Templating

let menu = ['Home', 'About', 'Concat US', 'Shop'];
let cart = ['Apple', 'Samsung', 'Sony', 'LG'];

let list = document.querySelector('.list')


let markup = menu.map((li) => `<li class="li_item">${li}</li>`).join('')
// markup = cart.map((li) => `<li class="li_item">${li}</li>`).join('')
// list.innerHTML = markup
// list.insertAdjacentHTML('beforeend', markup)


