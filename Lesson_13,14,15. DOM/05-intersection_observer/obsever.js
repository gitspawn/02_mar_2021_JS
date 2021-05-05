/**
 * IntersectionObserver
 * Lazy loading
 * https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
 */


// let box = document.querySelector('.js-observe-box');

// let observerInstance = new IntersectionObserver((entries, observer) => {
//   entries.forEach((entry) => {
//     // console.log(entry)
//     // console.log(entry.target)
//     entry.target.textContent = 'Is intersecting'
//     console.log(entry.target.textContent)
//     entry.target.src = entry.target.dataset.src
//     observer.disconnect()
//   })
// })

// observerInstance.observe(box)


// Lazy loading

let settings = {
  rootMargin: '0px 0px -200px 0px'
}

if (!!window.IntersectionObserver) {
  let observer = new IntersectionObserver((enteries, observer) => {
    enteries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.textContent = 'Image is intersacting'
        entry.target.src = entry.target.dataset.src
        observer.unobserve(entry.target)
      }
    })
  }, settings)

  document.querySelectorAll('img').forEach((img) => {
    observer.observe(img)
  })

} else {
 alert('No support of IntersectionObserver')
}