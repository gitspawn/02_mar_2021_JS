export default function fetchImages(searchImage) {
    let key = '16847035-2769300c76d48561bbb060e95';

    let url = `https://pixabay.com/api/?key=${key}&q=${searchImage}&image_type=photo&page=2`;

    return fetch(url).then(res => res.json())
        .then(({ hits }) => {
            return hits;
            console.log(hits);
            // renderGallery(hits);
        })
        .catch(err => console.error(err));
}