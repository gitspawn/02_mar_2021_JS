const refs = {
  tags: document.querySelector(".js-tags"),
  activeTagOutput: document.querySelector(".js-active-tag"),
};


refs.tags.addEventListener('click', onTagsClick)

function onTagsClick(event) {
    console.log('event.target', event.target)
    console.log('event.currentTarget',  event.currentTarget)

    // console.log(event.target.nodeName)
    if ('BUTTON' !== event.target.nodeName) {
      return
    }
    // console.log('Нажал кнопку')

    let currentActiveTag = event.currentTarget.querySelector('.tags__btn--active')

    if (currentActiveTag){
      currentActiveTag.classList.remove('tags__btn--active')
    }


    // DAta atributes
    //  console.log(event.target.dataset)
    //  console.log(event.target.dataset.value)

      let nextActivTag = event.target
      nextActivTag.classList.add('tags__btn--active')
      refs.activeTagOutput.textContent = nextActivTag.dataset.value
}