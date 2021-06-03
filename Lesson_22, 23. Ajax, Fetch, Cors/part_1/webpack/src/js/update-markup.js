import imagesTemplate from '../tempaltes/imagesTemplate.hbs';

let root = document.querySelector('#root');



function updateMarkup(images) {
    let markup = imagesTemplate(images);
    root.insertAdjacentHTML('beforeend', markup);
}

export default updateMarkup;

