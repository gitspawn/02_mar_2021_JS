const galleryItems = [
  { img: "https://placeimg.com/300/150/animals", text: "animals" },
  { img: "https://placeimg.com/300/150/arch", text: "architecture" },
  { img: "https://placeimg.com/300/150/nature", text: "nature" },
  { img: "https://placeimg.com/300/150/people", text: "people" },
  { img: "https://placeimg.com/300/150/tech", text: "tech" },
  { img: "https://placeimg.com/300/150/any", text: "random" },
];


let root = document.querySelector('#root');
let template = document.querySelector('#gallery').innerHTML;

// console.log(root)
// console.log(template)

let templateScript = Handlebars.compile(template);
let markup = templateScript(galleryItems)

root.innerHTML = markup


/*
<template id="gallery">
      <div class="gallery">
        <h2 class="gallery-title">Gallery</h2>
        <div class="gallery-content">
          {{#each this}}
          <div class="gallery-item">
            <img src="{{this.img}}" alt="{{this.text}}" class="gallery-img" />
            <p class="gallery-text">{{this.text}}</p>
          </div>
          {{/each}}
        </div>
      </div>
    </template>
*/