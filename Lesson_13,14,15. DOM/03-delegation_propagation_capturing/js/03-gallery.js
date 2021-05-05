const refs = {
  gallery: document.querySelector(".js-gallery"),
  largeImage: document.querySelector(".js-large-image"),
};


refs.gallery.addEventListener('click', onGalleryClick)


function onGalleryClick(event) {
  // console.log(event.target)
  event.preventDefault()

  // console.log(event.target.nodeName)
  if ('IMG' !== event.target.nodeName) {
    return
  }

  let imageRef = event.target
  let lagreImageUrl = imageRef.dataset.source

  // console.log(lagreImageUrl)

  // refs.largeImage.src = lagreImageUrl
  setLarge(lagreImageUrl)
  // console.log('Кликнул на картинку')

}

function setLarge(url) {
  refs.largeImage.src = url
}