// Save from form to LocalStorage

let formRef = document.querySelector('.js-feedback-form')
let textAreaRef = document.querySelector('textarea')

getMsgFromLS()


textAreaRef.addEventListener('input', textAreaHandle)

formRef.addEventListener('submit', (event) => {
  event.preventDefault()
  // console.log('Sending to server...')
  let msgFromLS = localStorage.getItem('fdb-msg')

  if (msgFromLS) {
    localStorage.removeItem('fdb-msg')
    event.target.reset()
  }
})


function textAreaHandle (event){
    let message = event.target.value  
    localStorage.setItem('fdb-msg', message)
}

function getMsgFromLS(){
  let msgFromLS = localStorage.getItem('fdb-msg') 

  if(msgFromLS){
    console.log('Нашли в ЛС')
    textAreaRef.value = msgFromLS
  }
}
