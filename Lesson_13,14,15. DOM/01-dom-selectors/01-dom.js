// window.document
// console.log(window.document)
// console.log(document)
// console.log(document.body)


// document.querySelector
// document.querySelectorAll

// Single Element Selector
// let h1 = document.querySelector('h1');
// console.log(h1)

// let linkYahoo = document.querySelector('.link__yahoo');
// console.log(linkYahoo)

// let formSingUp = document.querySelector('#signUp')
// console.log(formSingUp)

// let h1 = document.getElementById('title');
// console.log(h1)


// =================================
// Multiple elements
// NodeList(2) [ul.list, ul.list]
// Array like object (псевдомассив)
// let ul = document.querySelectorAll('ul')
// let ul = document.querySelectorAll('.list')
// let ul = document.querySelectorAll('.list')[1]
// console.log(typeof ul)
// console.log(Array.isArray(ul))
// console.log(ul)


// Old School
// ==================================
// HTMLCollection(2) [ul.list, ul.list]
// let ulRef = document.getElementsByClassName('list')
// console.log(ulRef)

// =======================================
// Convert HTMLCollection to Array
// let ulRef = document.getElementsByClassName('list')
// let ulRefArr = Array.from(ulRef)
// let ulRefArr = [...ulRef]
// console.log(ulRefArr)



// Перебор элементов в цикле
// let imagesRef = document.querySelectorAll('img')
// // console.log(imagesRef)

// imagesRef.forEach((image) => {
//   // console.log(image)
//   image.style.display = "none"
// })

// =========================================================
// Li inside ul
{/* <ul class="list">
  <li class="list_item">Item 1</li>
  <li class="list_item">Item 2</li>
  <li class="list_item">Item 3</li>
  <li class="list_item">Item 4</li>
</ul> */}


// let ulRef = document.querySelectorAll('.list')[0]
// let liRef = ulRef.querySelectorAll('li')
// console.log(liRef)


// let liRef = document.querySelectorAll('.list li')[0]
// console.log(liRef)