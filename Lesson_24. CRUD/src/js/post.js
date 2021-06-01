// Method POST create book


// const BASE_URL = 'http://localhost:4040';

// let book = {
//     "title": "Книга JavaScript",
//     "author": "O'Raily",
//     "genres": ["компьютерная литература"],
//     "rating": 10.0
// };


// function addBook(BASE_URL, newBook) {
//     let options = {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json;charset=utf-8"
//         },
//         body: JSON.stringify(newBook)
//     };

//     return fetch(`${BASE_URL}/books`, options).then(res => res.json());
// }

// addBook(BASE_URL, book);


// JSON Placeholder======================================
const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

let opt = {
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


function fetchBooks() {

    return fetch(`${BASE_URL}`, opt)
        .then(res => res.json())
        .catch(err => alert(err));
}

fetchBooks().then(res => console.log(res));