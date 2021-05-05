/*
 Event Submit
 Default browser actions
 Elements property
 Class FormData() - https://developer.mozilla.org/ru/docs/Web/API/FormData
*/


let formRef = document.querySelector('.js-register-form');

formRef.addEventListener('submit', (event) => {
  event.preventDefault()
  // console.log('Submit')


  // Select Form items
  // let inputNameRef = document.querySelector('input[name="name"]')
  // console.log(inputNameRef.autocomplete)
  // console.log(inputNameRef.placeholder)
  // console.log(inputNameRef.value)
  
  // let inputEmailRef = document.querySelector('input[name="email"]')
  // console.log(inputEmailRef.type)
  // =============================
  // Elements
  // console.dir(event.target)

  // let formRef = event.target
  // console.dir(event.target.elements)
  // console.dir(formRef.elements)
  // console.dir(formRef.elements.name.value)
  // console.dir(formRef.elements.email.value)
  // console.dir(formRef.elements.password.value)
  // console.dir(formRef.elements.subscription.value)

  // let dataFromForm = {
  //   name: formRef.elements.name.value,
  //   email: formRef.elements.email.value
  // }
  // console.log(dataFromForm)

  
  // =================================
  // FormData
  let formRef = event.target
  let formData = new FormData(formRef);
  let subscribedData = {}
  formData.forEach((value, key) => {
    // console.log('value', value)
    // console.log('key', key)
    subscribedData[key] = value
  })
  console.log(subscribedData)
})
