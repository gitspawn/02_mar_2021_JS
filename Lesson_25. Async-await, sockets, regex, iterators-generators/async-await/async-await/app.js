// Async / await
let delay = (delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(delay);
        }, delay);
    });
};
// delay(1500).then((data) => console.log(data));





// ========================
// Promises
let url = "https://jsonplaceholder.typicode.com/users";

// function fetchData(url) {
//     console.log('Fetch start...');
//     delay(1500)
//         .then((data) => data)
//         .then(() => fetch(url))
//         .then((res) => res.json())
//         .then((data) => console.log(data))
//         .catch((err) => console.log(err));
// }

// fetchData(url);

// ================================
// async / await;

// async function fetchData(url = '') {
//     await delay(1500);
//     let response = await fetch(url);
//     let data = await response.json();
//     // console.log(data);
// }

// fetchData(url);


// ===================================
// try / catch

// try {
//     console.log('Hello');
//     console.log(pizza);
// } catch (err) {
//     console.log(err);
// }
// console.log('World');



// console.log('Hello');
// console.log(pizza);
// console.log('World');


// async function fetchData(url) {
//     try {
//         await delay(1500);
//         let response = await fetch(url);
//         let data = await response.json();
//         console.log(data);
//     } catch (err) {
//         console.log(err);
//     }
// }

async function fetchData(url) {
    try {
        await delay(1500);
        let response = await fetch(url);
        if (response.status == 200) {
            let data = await response.json();
            console.log(data);
        }
    } catch (err) {
        console.log(err);
    }
}

fetchData(url);

