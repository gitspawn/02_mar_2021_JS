// Status codes
// 1XX — несут информационное назначение;
// 2XX — коды успешного проведения операции;
// 3XX — описывают все что связано с перенаправлением;
// 4XX — указывают на ошибки клиента;
// 5XX — указывают на ошибки на стороне сервера;
// Не нужно помнить каждый код состояния(их много), но необходимо знать наиболее распространенные и их значения
// https://httpstatuses.com/



// https://www.youtube.com/watch?v=vrMN4bRjwbg


// URN; https://www.youtube.com
// URL; /watch?v=vrMN4bRjwbg;;;
// URI; https://www.youtube.com/watch?v=vrMN4bRjwbg&user=vova

// // Параметры запроса
// watch ? v = vrMN4bRjwbg
// v = vrMN4bRjwbg;

// // Fetch






// JSON Viewer chrome extention`
// fetch(uri, options = {});


// Формат запроса;
// HTTP - метод — определяет какую операцию выполнять.
// Заголовок — позволяет клиенту передавать информацию о запросе.
// Путь — путь к ресурсу.Доступные пути описываются в документации бекенда.
// Тело — дополнительный блок запроса, содержащий данные.;


/*

let options = {""
    method: 'POST',
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
};

fetch('https://jsonplaceholder.typicode.com/posts', options)
    .then((response) => response.json())
    .then((json) => console.log(json));

    */


// Simple GET request
// let url = "https://jsonplaceholder.typicode.com/todos/1";


// let url = 'https://jsonplaceholder.typicode.com/users';
// fetch(url)
//     .then(response => response.json())
//     .then(users => console.log(users))
//     .catch(err => console.log(err));



// let url = 'https://jsonplaceholder.typicode.com/users';
// fetch(url)
//     .then(response => {
//         console.log(response);
//         if (response.status === 200) {
//             return response.json();
//         }
//     })
//     .then(users => console.log(users))
//     .catch(err => console.log(err));


// let options = {
//     method: "GET",
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     },
// };


// let url = 'https://jsonplaceholder.typicode.com/users';
// fetch(url, options)
//     .then(res => res.json())
//     .then(data => console.log(data));



// =============================================
// allgoria
// let url = 'http://hn.algolia.com/api/v1/search?query=css&tags=story';
// fetch(url, {}).then(res => res.json()).then(data => console.log(data.hits));

// ======================================================
// newsapi

// let options = {
//     headers: {
//         'X-Api-Key': '8bc2be7fce9f45c3be5446f60af3b87c'
//     }
// };

// let options = {
//     headers: {
//         'Authorization': '8bc2be7fce9f45c3be5446f60af3b87c'
//     }
// };


// let API_KEY = '8bc2be7fce9f45c3be5446f60af3b87c';
// let url = `https://newsapi.org/v2/everything?q=Apple&from=2021-05-25&sortBy=popularity&apiKey=${API_KEY}`;

// fetch(url).then(res => res.json()).then(news => console.log(news));


// ================================================


// comments: 21;
// downloads: 242;
// favorites: 0;
// id: 6271645;
// imageHeight: 4100;
// imageSize: 4697006;
// imageWidth: 6000;
// largeImageURL: "https://pixabay.com/get/g95a75388e75f01df489e6f10752b6f4b2366eb91b063bc93a5e0437dd76cf499142320c04ba3017cc265aec24cf3c0515300f331280eedfba0ab2e188cc5aa45_1280.jpg";
// likes: 21;
// pageURL: "https://pixabay.com/photos/church-cliff-lightning-woman-6271645/";
// previewHeight: 102;
// previewURL: "https://cdn.pixabay.com/photo/2021/05/21/17/28/church-6271645_150.jpg";
// previewWidth: 150;
// tags: "church, cliff, lightning";
// type: "photo";
// user: "mollyroselee";
// userImageURL: "https://cdn.pixabay.com/user/2021/03/17/21-21-20-677_250x250.jpg";
// user_id: 9214707;
// views: 281;
// webformatHeight: 437;
// webformatURL: "https://pixabay.com/get/g5cb27a69e8033a245bbd15e0784f54ab8c9a944c7f853fa743fb37c463bf75f49df37e0b6cc6536e8d6fb6a589d92a24bfbb321df464d23022b93e1f86016ae0_640.jpg";
// webformatWidth: 640




// pixabay
// let key = '16847035-2769300c76d48561bbb060e95';

// // let url = `https://pixabay.com/api/?key=${key}&category=fashion&image_type=photo&page=1`;
// let url = `https://pixabay.com/api/?key=${key}&q=cat&image_type=photo&page=2`;


// // let imagesOuter;

// fetch(url).then(res => res.json())
//     .then(({ hits }) => {
//         // console.log(hits);
//         renderGallery(hits);
//     })
//     .catch(err => console.error(err));


// let root = document.querySelector('#root');


// function createImg(imgObj) {
//     return `<img src=${imgObj.webformatURL} alt=${imgObj.tags}/>`;
// }


// function renderGallery(imgArr) {
//     let markup = imgArr.reduce((acc, el) => {
//         return createImg(el) + acc;
//     }, '');
//     root.insertAdjacentHTML('beforeend', markup);
// }