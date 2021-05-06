const galleryItems = [
  { img: "https://placeimg.com/300/150/animals", text: "animals" },
  { img: "https://placeimg.com/300/150/arch", text: "architecture" },
  { img: "https://placeimg.com/300/150/nature", text: "nature" },
  { img: "https://placeimg.com/300/150/people", text: "people" },
  { img: "https://placeimg.com/300/150/tech", text: "tech" },
  { img: "https://placeimg.com/300/150/any", text: "random" },
];


let gallery = document.querySelector('#gallery').innerHTML
let root = document.querySelector('#root')


let templateScript = Handlebars.compile(gallery);
let markup = templateScript(galleryItems)
root.innerHTML = markup