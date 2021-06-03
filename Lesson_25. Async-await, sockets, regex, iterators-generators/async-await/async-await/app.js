// Async / await
let delay = (delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(delay);
        }, delay);
    });
};
delay(5000).then((data) => console.log(data));

let url = "https://jsonplaceholder.typicode.com/users";
