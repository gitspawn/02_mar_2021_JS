// alert('Hello')
// 

// DOMContentLoaded
window.addEventListener('load', () => {
  
  let btnRef = document.querySelector('#myModalBtn');
  let modalRef = document.querySelector('#myModal')
  let spanRef = document.querySelector('.close')
  
  
  btnRef.addEventListener('click', () => {
      modalRef.style.display = 'block'
  })
  
  spanRef.addEventListener('click', () => {
    modalRef.style.display = 'none'
  })
  
  spanRef.addEventListener('mouseover', (event) => {
    let span =  event.target.style
    span.cursor = 'pointer'
  })
  
  window.addEventListener('keydown', (event) => {
    if(event.code === 'Escape') {
      console.log("Нажали Esc")
      modalRef.style.display = 'none'
    }
  })
  
  
  window.addEventListener('click', (event) => {
     if (event.target === modalRef) {
        event.target.style.display = 'none'
      }
  })
})



