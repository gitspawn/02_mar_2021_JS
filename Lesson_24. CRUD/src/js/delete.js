// by ID
// Method DELETE,

const BASE_URL = 'http://localhost:4040';


function removeBook(BASE_URL, bookId) {
    let options = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json;charset=utf-8"
        },
    };


    return fetch(`${BASE_URL}/books/${bookId}`, options).then(res => console.log('Deleted...'));
}


// removeBook(BASE_URL, 9);
removeBook(BASE_URL, 5);