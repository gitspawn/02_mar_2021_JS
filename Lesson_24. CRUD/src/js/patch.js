// by ID
// Method PATCH,
// Method PUT


const BASE_URL = 'http://localhost:4040';

let bookToUpdate = {
    "title": "New CSS 2021",
    "rating": 5.78
};


function updateBookById(BASE_URL, bookToUpdate, bookId) {
    let options = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json;charset=utf-8"
        },
        body: JSON.stringify(bookToUpdate)
    };

    return fetch(`${BASE_URL}/books/${bookId}`, options).then(res => res.json());
}

updateBookById(BASE_URL, bookToUpdate, 8);