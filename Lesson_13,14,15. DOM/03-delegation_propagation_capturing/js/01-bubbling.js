/*
 * Event Bubbling
 * event.target
 * event.currentTarget
 */

const refs = {
  parent: document.querySelector("#parent"),
  child: document.querySelector("#child"),
  innerChild: document.querySelector("#inner-child"),
};

let parentClickHandler = (event) => {
  console.log('Parent Click')
  console.log('target', event.target)
  console.log('current target', event.currentTarget)
}


let childClickHandler = (event) => {
  console.log('Child Click')
  console.log('target', event.target)
  console.log('current target', event.currentTarget)
}


let innerChildClickHandler = (event) => {
  console.log('Inner Click')
  console.log('target', event.target)
  console.log('current target', event.currentTarget)
  // event.stopPropagation() -- -- отменить всплытие
  // event.preventDefault()  -- отменить по умолчанияю
}

// window.addEventListener('click', (event) => {
//   console.log('Window Click')
// })


refs.parent.addEventListener('click', parentClickHandler)
refs.child.addEventListener('click', childClickHandler)
refs.innerChild.addEventListener('click', innerChildClickHandler)