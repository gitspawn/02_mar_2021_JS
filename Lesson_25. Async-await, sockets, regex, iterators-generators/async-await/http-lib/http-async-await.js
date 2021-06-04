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
    async get(url) {
        try {

            let options = {};
            let response = await fetch(url, options);
            let responseData = await response.json();
            return responseData;
        } catch (err) {
            return err;
        }
    }

    async post(url, data) {
        try {
            let options = {
                method: "POST",
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(data)
            };

            let response = await fetch(url, options);
            let responseData = await response.json();
            return responseData;
        } catch (err) {
            return err;
        }
    }


    async patch(url, data, id) {
        try {
            let options = {
                method: "PATCH",
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(data)
            };

            let response = await fetch(url + '/' + id, options);
            let responseData = await response.json();
            return responseData;
        } catch (error) {
            return error;
        }
    }

    async delete(url, id) {
        try {
            let options = {
                method: "DELETE",
                headers: { 'Content-type': 'application/json' },
            };
            let response = await fetch(url + '/' + id, options);
            let responseData = await response.json();
            return responseData;
        } catch (error) {
            return error;
        }
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
// http.patch(url, newDoto, 4);

// Delete ============================
// http.delete(url, 5);