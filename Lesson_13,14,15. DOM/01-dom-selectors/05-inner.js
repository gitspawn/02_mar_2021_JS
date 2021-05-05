{/* <h1 class="heading main__title red prinary" id="title">Titile</h1> */ }

let h1 = document.querySelector('h1')
// console.log(h1)

// innerText
// innetHTML

// =======================
// innerText
// let text = h1.innerText
// h1.innerText = 'Hello world'
// console.log(text)

//======
//Text content
// let text = h1.textContent
// h1.textContent = 'Hello Vova'
// console.log(text)
//==================
// innetHTML

// console.log(h1.innerHTML)
// h1.innerHTML = ''
// h1.innerHTML = '<span>Hello</span>'


let friends = [
  { id: 1, name: 'Vova', age: 20, budget: 2400, isComplete: true },
  { id: 2, name: 'Sara', age: 25, budget: 3500, isComplete: false },
  { id: 3, name: 'Mike', age: 30, budget: 300, isComplete: true },
  { id: 4, name: 'Bob', age: 18, budget: 200, isComplete: false }
]

let html = ''
friends.forEach(({ name, age }) => {
  html += `
    <li class="list__item">${name}, ${age}</li>
  `
})

console.log(html)

let ulRef = document.querySelectorAll('.list')[0]
console.log(ulRef)

ulRef.innerHTML = html
