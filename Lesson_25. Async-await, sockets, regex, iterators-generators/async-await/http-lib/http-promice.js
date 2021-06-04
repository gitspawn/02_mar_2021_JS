/*
GET
POST
PATCH
DELETE
*/


// Axios
// axios.post();
// axios.get();


class HTTP {
    get(url) {
        return new Promise((resolve, reject) => {
            let options = {};
            return fetch(url, options)
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err));
        });
    }

    post(url, data) {
        return new Promise((resolve, reject) => {
            let options = {
                method: "POST",
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(data)

            };
            return fetch(url, options)
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err));
        });
    }



    patch(url, data, id) {
        return new Promise((resolve, reject) => {
            let options = {
                method: "PATCH",
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(data)

            };
            return fetch(url + '/' + id, options)
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err));
        });
    }

    delete(url, id) {
        return new Promise((resolve, reject) => {
            let options = {
                method: "DELETE",
                headers: { 'Content-type': 'application/json' },
            };
            return fetch(url + '/' + id, options)
                .then(res => res.json())
                .then(() => resolve('Deleted...'))
                .catch(err => reject(err));
        });
    }
}


// let url = "https://jsonplaceholder.typicode.com/todos";
let url = "http://localhost:4040/posts";

let http = new HTTP();

// GET ======================
// http.get(url).then(data => displayFetchData(data));

// function displayFetchData(data) {
//     console.log('displayFetchData', data);
// }


// POST =========================
// let newDoto = {
//     title: "delectus aut autem",
//     completed: false
// };

// http.post(url, newDoto);

// let newPost = {
//     title: "Corona news Ukraine",
// };
// http.post(url, newPost);


// Patch========================
// let newDoto = {
//     title: "delectus aut autem",
// };
// http.patch(url, newDoto, 2);

// Delete ============================
// http.delete(url, 2);